import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: String,
    img: String,
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model("categories", categorySchema);
