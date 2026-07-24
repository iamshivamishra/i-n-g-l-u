import { Resend } from "resend";
import { getEmailContent, EmailType } from "./emailTemplates";

type SendEmailProps = {
  to: string;
  name: string;
  type: EmailType;
  token: string;
};

export async function sendAuthEmail({ to, name, type, token }: SendEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "RESEND_API_KEY not set — skipping auth email send (dev mode).",
    );
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const content = getEmailContent(type, token);

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "INGLU <no-reply@inglu.in>",
    to: [to],
    subject: content.title,
    html: `<p>Hi ${name},</p><p>${content.message}</p>${
      content.actionUrl
        ? `<p><a href="${content.actionUrl}">${content.actionText}</a></p>`
        : ""
    }`,
  });
}
