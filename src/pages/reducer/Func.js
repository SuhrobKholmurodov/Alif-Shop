import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getUsers } from "../../api/FuncApi";
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    users: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export default dataSlice.reducer;
