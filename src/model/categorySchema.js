import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    title: String,
  },
  {
    autoCreate: false,
    autoIndex: false,
    timestamps: true,
  }
);

export const Category = mongoose.model("categories", categorySchema);
