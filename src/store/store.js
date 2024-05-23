import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../pages/reducer/Func";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
