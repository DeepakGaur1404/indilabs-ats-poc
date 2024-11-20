import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: any = {
  performanceData: [],
  loading: true,
  error: {},
};

export const getPerformanceData = createAsyncThunk("/performance", async () => {
  try {
    const resp = await axios.post(
      "https://indilabs-json.vercel.app/updateDashboard"
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
});

const ReviewPerformanceSlice = createSlice({
  name: "reviewPerformance",
  initialState,
  reducers: {
    addPerformance: (state, { payload }: any) => {
      state.performanceData = [...state.performanceData, payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPerformanceData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPerformanceData.fulfilled, (state, { payload }) => {
      state.performanceData = payload;
      state.loading = false;
    });

    builder.addCase(getPerformanceData.rejected, (state, { payload }: any) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { addPerformance } = ReviewPerformanceSlice.actions;

export default ReviewPerformanceSlice.reducer;
