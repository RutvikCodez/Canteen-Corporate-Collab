import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    tableId: {
      type: String,
      required: true,
    },

    items: [
      {
        _id: String,
        name: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMode: {
      type: String,
      enum: ["CASH"],
      default: "CASH",
    },

    status: {
      type: String,
      enum: ["PENDING", "PREPARING", "SERVED"],
      default: "PENDING",
    },

    estimatedTime: {
      type: Number, // minutes
      default: 20,
    },
  },
  { timestamps: true }
);

export default models.Order || mongoose.model("Order", OrderSchema);
