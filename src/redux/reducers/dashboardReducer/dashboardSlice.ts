import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IDashboardState } from "../../model/dashboard.model";

interface DashboardState {
  data: IDashboardState | null;
  loading: boolean;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    saveDashboardData: (state: DashboardState, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = true;
    },
  },
});
export const { saveDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
