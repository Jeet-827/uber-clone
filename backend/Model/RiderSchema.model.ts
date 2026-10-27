import mongoose, { Schema } from "mongoose";

const driverSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Driver name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Driver email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },

    // Vehicle details
    vehicle: {
      vehicleType: {
        type: String,
        enum: ["car", "motorcycle", "auto", "van"],
        default: "car",
        required: true,
      },

      model: {
        type: String,
        trim: true,
      },

      numberPlate: {
        type: String,
        required: [true, "Vehicle number plate is required"],
        unique: true,
        uppercase: true,
        trim: true,
      },
    },

    // Driving license
    drivingLicense: {
      type: String,
      required: [true, "Driving license number is required"],
      unique: true,
      uppercase: true,
      trim: true,
    },

    // Bank details
    bankDetails: {
      accountNumber: {
        type: String,
        select: false,
      },

      ifscCode: {
        type: String,
        uppercase: true,
        trim: true,
        select: false,
      },

      accountHolderName: {
        type: String,
        trim: true,
      },
    },


    currentRide: {
      type: Schema.Types.ObjectId,
      ref: "Ride",
      default: null,
    },


    isAvailable: {
      type: Boolean,
      default: false,
    },

    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number],
        default: undefined,
      },
    },
  },
  {
    timestamps: true,
  }
);

driverSchema.index({ currentLocation: "2dsphere" });

export const Driver = mongoose.model("Driver", driverSchema);