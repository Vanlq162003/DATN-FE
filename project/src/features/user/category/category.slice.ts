import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export const {} = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
