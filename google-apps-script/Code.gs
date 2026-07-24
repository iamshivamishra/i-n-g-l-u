/**
 * DUMMY Google Sheets webhook.
 *
 * How to use:
 * 1. Create a Google Sheet.
 * 2. Extensions → Apps Script, paste this file's contents as Code.gs.
 * 3. Deploy → New deployment → Type: "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL and set it as GOOGLE_SHEET_WEBHOOK_URL in .env.local.
 *
 * Every submission from the site (contact form, newsletter, etc.) will show up
 * as a new row, with formType in column A and each field as its own column.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const payload = JSON.parse(e.postData.contents);

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
  const knownKeys = headers.filter(String);
  const incomingKeys = Object.keys(payload);

  // Add any new columns we haven't seen before.
  incomingKeys.forEach((key) => {
    if (!knownKeys.includes(key)) {
      knownKeys.push(key);
    }
  });

  if (knownKeys.length !== headers.filter(String).length) {
    sheet.getRange(1, 1, 1, knownKeys.length).setValues([knownKeys]);
  }

  const row = knownKeys.map((key) => payload[key] ?? "");
  sheet.appendRow(row);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
