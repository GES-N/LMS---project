import mongoose, { Schema, model } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    publishedYear: { type: Number, required: true },
    copiesAvailable: { type: Number, required: true, min: 0 },
    totalCopies: { type: Number, required: true, min: 1 },
    status: {
      type: String,
      enum: ["available", "checked_out"],
      default: "available",
    },
  },
  { timestamps: true }
);

export const BookModel = model("Book", BookSchema);
