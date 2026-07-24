/**
 * Fire-and-forget notifiers used after a form submission is saved to MongoDB.
 * Both are safe no-ops if their env var isn't configured, so forms never
 * fail just because a webhook is missing.
 */

type FormPayload = {
  formType: string;
  data: Record<string, unknown>;
};

/**
 * Sends a nicely formatted message to a Discord channel via webhook.
 * Set DISCORD_WEBHOOK_URL in .env.local — for now a dummy/test webhook works fine.
 */
export async function sendToDiscord({ formType, data }: FormPayload) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("DISCORD_WEBHOOK_URL not set — skipping Discord notification.");
    return false;
  }

  const fields = Object.entries(data).map(([key, value]) => ({
    name: key,
    value: String(value ?? "—").slice(0, 1024),
    inline: true,
  }));

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: `New ${formType} submission`,
            color: 0x1d5fff,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return res.ok;
  } catch (err) {
    console.error("DISCORD WEBHOOK ERROR:", err);
    return false;
  }
}

/**
 * Appends a row to a Google Sheet through a Google Apps Script Web App
 * deployed as "Anyone" can access. This avoids needing a full Google Cloud
 * service account just to append rows.
 *
 * Set GOOGLE_SHEET_WEBHOOK_URL in .env.local to the deployed Apps Script URL
 * (see /google-apps-script/Code.gs in this repo for the dummy script to deploy).
 */
export async function sendToGoogleSheet({ formType, data }: FormPayload) {
  const sheetUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!sheetUrl) {
    console.warn(
      "GOOGLE_SHEET_WEBHOOK_URL not set — skipping Google Sheet sync.",
    );
    return false;
  }

  try {
    const res = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType,
        submittedAt: new Date().toISOString(),
        ...data,
      }),
    });

    return res.ok;
  } catch (err) {
    console.error("GOOGLE SHEET WEBHOOK ERROR:", err);
    return false;
  }
}
