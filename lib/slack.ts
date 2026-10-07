export async function notifySlack(
  title: string,
  fields: Record<string, string>,
  channel?: "new-leads" | "lead-magnets"
): Promise<{ delivered: boolean; skipped?: boolean }> {
  const webhookUrl =
    channel === "new-leads"
      ? (process.env.SLACK_WEBHOOK_URL_NEW_LEADS || process.env.SLACK_WEBHOOK_URL)
      : channel === "lead-magnets"
        ? (process.env.SLACK_WEBHOOK_URL_LEAD_MAGNETS || process.env.SLACK_WEBHOOK_URL)
        : process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return { delivered: false, skipped: true };

  const fieldBlocks = Object.entries(fields).map(([key, value]) => ({
    type: "mrkdwn" as const,
    text: `*${key}:*\n${value}`,
  }));

  const payload = {
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: title },
      },
      {
        type: "section",
        fields: fieldBlocks,
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) {
      throw new Error(`Slack webhook failed (${response.status})`);
    }
    return { delivered: true };
  } catch (err) {
    console.error("[Slack] Notification failed:", err);
    return { delivered: false };
  }
}
