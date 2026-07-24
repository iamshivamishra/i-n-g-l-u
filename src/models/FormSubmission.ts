import mongoose, { Schema, Document } from "mongoose";

export interface IFormSubmission extends Document {
  formType: string;
  data: Record<string, unknown>;
  discordSent: boolean;
  sheetSent: boolean;
  createdAt: Date;
}

const formSubmissionSchema = new Schema<IFormSubmission>(
  {
    formType: {
      type: String,
      required: true,
      index: true,
    },
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
    discordSent: {
      type: Boolean,
      default: false,
    },
    sheetSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.models.FormSubmission ||
  mongoose.model<IFormSubmission>("FormSubmission", formSubmissionSchema);
