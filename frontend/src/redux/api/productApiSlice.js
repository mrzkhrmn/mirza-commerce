import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBestSellingProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/best`,
      }),
    }),
  }),
});

export const { useGetBestSellingProductsQuery } = productApiSLice;
