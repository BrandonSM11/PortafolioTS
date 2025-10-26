import { Schema, model, Model } from "mongoose";

const contactMessageSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+\@.+\..+/, "Debe ser un correo válido"],
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

let ContactMessageModel: Model<any>;
try {
  ContactMessageModel = model("ContactMessage");
} catch {
  ContactMessageModel = model("ContactMessage", contactMessageSchema);
}

export default ContactMessageModel;
