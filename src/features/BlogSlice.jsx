import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    blogs: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    firmSuccess: (state, { payload }) => {
      state.blogs = payload.data;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { fetchStart, fetchFail, firmSuccess } = blogSlice.actions;

export default blogSlice.reducer;
