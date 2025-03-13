import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    bookFile: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    copiesAvailable: { type: Number, required: true },
    totalCopies: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "checked_out"],
      default: "available",
    },
  },
  { timestamps: true }
);

BookSchema.plugin(normalize);

export const BookModel = model("Book", BookSchema);
