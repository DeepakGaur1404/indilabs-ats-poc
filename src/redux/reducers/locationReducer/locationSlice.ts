import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IDashboardState } from "../../model/dashboard.model";

interface DashboardState {
  data: IDashboardState | null;
  loading: boolean;
  activeState: number;
  mapData: IDashboardState | null;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  activeState: 0,
  mapData: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    locationData: (state: DashboardState, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = true;
    },
    activeStateData: (state: DashboardState, action: PayloadAction<any>) => {
      state.activeState = action.payload;
    },
    mapData: (state: DashboardState, action: PayloadAction<any>) => {
      state.mapData = action.payload;
    },
  },
});
export const { locationData, activeStateData, mapData } = locationSlice.actions;

export default locationSlice.reducer;
