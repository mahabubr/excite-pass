import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    image: String,
    name: String,
    time: String,
    time_from: String,
    location: String,
    price: Number,
    seat_no: String,
    hall_no: Number,
    description: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

export const Events = mongoose.model("events", eventSchema);
