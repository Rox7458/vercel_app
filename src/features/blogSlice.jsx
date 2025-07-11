import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "stock",
  initialState: {
    loading: false,
    error: false,
    firms: [],
    brands: [],
    purchases: [],
    products: [],
    sales: [],
    categories: [],
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
    stockSuccess: (state, { payload }) => {
      state[payload.url] = payload.data.data;
      state.loading = false;
      state.error = false;
    },

    //! PROMISE ALL UYGULAMALARI-----------
    ProCatBrandSuccess: (state, { payload }) => {
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
      state.loading = false;
    },
    SalesBrandProSuccess: (state, { payload }) => {
      state.sales = payload[0];
      state.brands = payload[1];
      state.products = payload[2];
      state.loading = false;
    },
  },
  PurBrandProSuccess: (state, { payload }) => {
    state.purchases = payload[0];
    state.brands = payload[1];
    state.products = payload[2];
    state.loading = false;
  },
});

export const { fetchStart, fetchFail, stockSuccess, ProCatBrandSuccess, SalesBrandProSuccess, PurBrandProSuccess } =
  blogSlice.actions;

export default blogSlice.reducer;
