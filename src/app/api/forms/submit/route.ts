import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import FormSubmission from "@/models/FormSubmission";
import { sendToDiscord, sendToGoogleSheet } from "@/lib/notify";

// Every form on the site (contact, newsletter, etc.) posts here with a
// `formType` label plus its own `data` object. This keeps a single pipeline
// (Mongo + Discord + Google Sheet) for all forms instead of one per form.
const ALLOWED_FORM_TYPES = ["contact", "newsletter"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, data } = body as {
      formType: string;
      data: Record<string, unknown>;
    };

    if (!formType || !ALLOWED_FORM_TYPES.includes(formType)) {
      return NextResponse.json(
        { message: "Invalid or missing formType" },
        { status: 400 },
      );
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json(
        { message: "Missing form data" },
        { status: 400 },
      );
    }

    await connectDB();

    const submission = await FormSubmission.create({
      formType,
      data,
    });

    // Fire both notifications in parallel; neither blocks the response
    // from succeeding, but we record whether they went through.
    const [discordOk, sheetOk] = await Promise.all([
      sendToDiscord({ formType, data }),
      sendToGoogleSheet({ formType, data }),
    ]);

    submission.discordSent = discordOk;
    submission.sheetSent = sheetOk;
    await submission.save();

    return NextResponse.json(
      { message: "Submitted successfully", id: submission._id },
      { status: 201 },
    );
  } catch (err) {
    console.error("FORM SUBMIT ERROR:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
