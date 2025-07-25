import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    error: false,
    blogs: [],
    blog: [],
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
    blogSuccess: (state, { payload }) => {
      state.blog = payload.data;
      console.log(data);
    },
  },
});

export const { fetchStart, fetchFail, firmSuccess, blogSuccess } = blogSlice.actions;

export default blogSlice.reducer;
