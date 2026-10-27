import mongoose from "mongoose";


const pointSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const rideSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
      index: true,
    },
    pickupCoordinate: {
      type: pointSchema,
      required: true,
    },
    dropCoordinate: {
      type: pointSchema,
      required: true,
    },
    otp: {
      type: String,
      select: false, 
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "ongoing", "completed", "cancelled"],
      default: "pending",
      index: true,
    },
    cancellationReason: {
      type: String,
      trim: true,
    },
    payment: {
      amount: {
        type: Number,
        required: true,
        min: 0,
      },
      currency: {
        type: String,
        default: "USD",
      },
      status: {
        type: String,
        enum: ["pending", "completed", "failed", "refunded"],
        default: "pending",
      },
      method: {
        type: String,
        enum: ["cash", "card", "upi", "wallet"],
      },
      transactionId: {
        type: String,
      },
    },
  },
  {
    timestamps: true, 
  }
);


rideSchema.index({ pickupCoordinate: "2dsphere" });
rideSchema.index({ dropCoordinate: "2dsphere" });

export const Ride = mongoose.model("Ride", rideSchema);