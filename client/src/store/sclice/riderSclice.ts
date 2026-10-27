
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Driver {
  _id: string;
  name: string;
  email: string;
  vehicle: {
    vehicleType: "car" | "motorcycle" | "auto" | "van";
    model?: string;
    numberPlate: string;
  };
  drivingLicense: string;
  currentRide?: string | null;
  isAvailable: boolean;
}

interface DriverState {
  driver: Driver | null;
  isAuthenticated: boolean;
}

const initialState: DriverState = {
  driver: null,
  isAuthenticated: false,
};

const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setDriver: (state, action: PayloadAction<Driver>) => {
      state.driver = action.payload;
      state.isAuthenticated = true;
    },

    clearDriver: (state) => {
      state.driver = null;
      state.isAuthenticated = false;
    },

    updateAvailability: (
      state,
      action: PayloadAction<boolean>
    ) => {
      if (state.driver) {
        state.driver.isAvailable = action.payload;
      }
    },
  },
});

export const {
  setDriver,
  clearDriver,
  updateAvailability,
} = driverSlice.actions;

export default driverSlice.reducer;
