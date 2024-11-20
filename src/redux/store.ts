import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboardReducer/dashboardSlice";
import locationReducer from "./reducers/locationReducer/locationSlice";
import ReviewPerformanceReducer from "./reducers/ReviewPerformanceReducer/ReviewPerformanceSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    location: locationReducer,
    performance: ReviewPerformanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
