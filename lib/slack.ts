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
    type: "plain_text" as const,
    text: `${key}:\n${value}`.slice(0, 2000),
  }));

  const payload = {
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: title.slice(0, 150) },
      },
      // Slack permits at most 10 fields per section. Contact leads have 17.
      ...Array.from({ length: Math.ceil(fieldBlocks.length / 10) }, (_, index) => ({
        type: "section",
        fields: fieldBlocks.slice(index * 10, index * 10 + 10),
      })),
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
