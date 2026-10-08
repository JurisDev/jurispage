import { after, NextRequest, NextResponse } from "next/server";
import { submitToHubSpot } from "@/lib/hubspot";
import { notifySlack } from "@/lib/slack";
import { prisma } from "@/lib/db";
import { verifyTurnstile } from "@/lib/turnstile";

type DeliveryStatus = {
  status: "delivered" | "failed" | "skipped";
  durationMs: number;
  error?: string;
};

function safeError(error: unknown) {
  return error instanceof Error ? error.message.slice(0, 300) : "Unknown error";
}

async function sendLeadEmail(
  payload: {
    from: string;
    to: string[];
    subject: string;
    html: string;
    replyTo: string;
  },
  idempotencyKey: string
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "skipped" as const;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new Error(`Lead email failed (${response.status})`);
  }

  return "delivered" as const;
}

async function trackDelivery(
  name: string,
  task: () => Promise<"delivered" | "skipped">
): Promise<[string, DeliveryStatus]> {
  const startedAt = Date.now();
  try {
    const status = await task();
    return [name, { status, durationMs: Date.now() - startedAt }];
  } catch (error) {
    return [
      name,
      {
        status: "failed",
        durationMs: Date.now() - startedAt,
        error: safeError(error),
      },
    ];
  }
}

export async function POST(req: NextRequest) {
  try {
    const requestStartedAt = Date.now();
    const body = await req.json();
    const { firstName, lastName, email, phone, website, practiceArea, budget, growthGoal, casesWanted, referral, message } = body;
    const attribution = JSON.parse(JSON.stringify({
      firstTouch: body.firstTouch,
      lastTouch: body.lastTouch,
      utmSource: body.utmSource,
      utmMedium: body.utmMedium,
      utmCampaign: body.utmCampaign,
      utmTerm: body.utmTerm,
      utmContent: body.utmContent,
      gclid: body.gclid,
      clickId: body.clickId,
      referrer: body.referrer,
    }));

    if (!firstName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const turnstileStartedAt = Date.now();
    if (!body.turnstileToken || !(await verifyTurnstile(body.turnstileToken))) {
      return NextResponse.json({ error: "Spam verification failed" }, { status: 403 });
    }
    const turnstileDurationMs = Date.now() - turnstileStartedAt;

    const submissionData = {
      firstName,
      lastName,
      website,
      practiceArea,
      budget,
      growthGoal,
      casesWanted,
      referral,
      message,
      attribution,
    };

    const databaseStartedAt = Date.now();
    const submission = await prisma.formSubmission
      .create({
        data: {
          type: "contact",
          name: `${firstName} ${lastName || ""}`.trim(),
          email,
          phone,
          data: {
            ...submissionData,
            delivery: {
              email: { status: "pending" },
              slack: { status: "pending" },
              hubspot: { status: "pending" },
            },
          },
        },
      })
      .catch((dbError) => {
        console.error("FormSubmission save error:", dbError);
        return null;
      });
    if (!submission) {
      return NextResponse.json(
        { error: "We could not save your request. Please try again." },
        { status: 503 }
      );
    }
    const databaseDurationMs = Date.now() - databaseStartedAt;

    const isJurisDigitalFit = budget === "$20,000+/month";

    const emailHtml = `
      <h2>New Lead from JurisPage.com</h2>
      ${isJurisDigitalFit ? '<p style="color: red; font-weight: bold;">⭐ JURIS DIGITAL FIT - Budget $20,000+/month</p>' : ""}
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Practice Area</td><td style="padding: 8px; border: 1px solid #ddd;">${practiceArea || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Website</td><td style="padding: 8px; border: 1px solid #ddd;">${website || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget</td><td style="padding: 8px; border: 1px solid #ddd;">${budget}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Growth Goal</td><td style="padding: 8px; border: 1px solid #ddd;">${growthGoal || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Cases Wanted</td><td style="padding: 8px; border: 1px solid #ddd;">${casesWanted || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Referral Source</td><td style="padding: 8px; border: 1px solid #ddd;">${referral || "N/A"}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Goals</td><td style="padding: 8px; border: 1px solid #ddd;">${message || "N/A"}</td></tr>
      </table>
    `;

    const slackFields = {
      "Law Firm": website || "N/A",
      "First Name": firstName || "N/A",
      "Last Name": lastName || "N/A",
      "Email": email,
      "Phone Number": phone || "N/A",
      "Website": website || "N/A",
      "Primary Practice Area": practiceArea || "N/A",
      "Monthly Budget": budget || "N/A",
      "Growth Goal": growthGoal || "N/A",
      "How many cases wanted?": casesWanted || "N/A",
      "Referral Source": referral || "N/A",
      "Message": message || "N/A",
      "Form Source": "contact-page",
      "Page URL": body.pageUri || "N/A",
      "First-touch source": body.firstTouch?.source || "N/A",
      "Last-touch source": body.lastTouch?.source || body.utmSource || "N/A",
      "Last-touch campaign": body.lastTouch?.campaign || body.utmCampaign || "N/A",
    };

    const formGuid = process.env.HUBSPOT_FORM_GUID;

    after(async () => {
      const deliveryEntries = await Promise.all([
        trackDelivery("email", async () => {
          return sendLeadEmail(
            {
              from: "JurisPage Leads <leads@jurispage.com>",
              to: ["cmeraz@jurisdigital.com", "ahatcher@jurisdigital.com", "jmeans@jurisdigital.com"],
              subject: `${isJurisDigitalFit ? "⭐ JURIS DIGITAL FIT" : "New JurisPage Lead"}: ${firstName} ${lastName} - ${practiceArea || "Law Firm"}`,
              html: emailHtml,
              replyTo: email,
            },
            `jurispage-contact-${submission.id}`
          );
        }),
        trackDelivery("slack", async () => {
          const result = await notifySlack(
            isJurisDigitalFit ? "⭐ Juris Digital Fit" : "New JurisPage Contact Lead",
            slackFields,
            "new-leads"
          );
          if (result.skipped) return "skipped";
          if (!result.delivered) throw new Error("Slack notification failed");
          return "delivered";
        }),
        trackDelivery("hubspot", async () => {
          if (!formGuid) return "skipped";
          await submitToHubSpot(
            formGuid,
            [
              { name: "firstname", value: firstName },
              { name: "lastname", value: lastName },
              { name: "email", value: email },
              { name: "phone", value: phone || "" },
              { name: "practice_area", value: practiceArea || "" },
              { name: "monthly_budget", value: budget || "" },
              { name: "website", value: website || "" },
              { name: "growth_goal", value: growthGoal || "" },
              { name: "how_many_cases_do_you_want_to_generate_from_marketing_per_month", value: casesWanted || "" },
              { name: "how_did_you_hear_about_us_", value: referral || "" },
              { name: "message", value: message || "" },
              { name: "form_source", value: "contact-page" },
            ],
            { hutk: body.hutk, pageUri: body.pageUri, pageName: body.pageName }
          );
          return "delivered";
        }),
      ]);

      const delivery = Object.fromEntries(deliveryEntries);
      console.log("[Contact] delivery", JSON.stringify({ submissionId: submission.id, delivery }));

      try {
        await prisma.formSubmission.update({
          where: { id: submission.id },
          data: {
            data: {
              ...submissionData,
              delivery,
              deliveryCompletedAt: new Date().toISOString(),
            },
          },
        });
      } catch (error) {
        console.error("[Contact] delivery status save failed", {
          submissionId: submission.id,
          error: safeError(error),
        });
      }
    });

    console.log("[Contact] accepted", JSON.stringify({
      submissionId: submission.id,
      durationMs: Date.now() - requestStartedAt,
      turnstileDurationMs,
      databaseDurationMs,
    }));

    return NextResponse.json({ success: true, submissionId: submission.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
