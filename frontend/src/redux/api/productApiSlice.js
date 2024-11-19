import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
    }),
    getBestSellingProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/best`,
      }),
    }),
    getFlashSalesProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/flash`,
      }),
    }),
    getExploreProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/explore`,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetBestSellingProductsQuery,
  useGetFlashSalesProductsQuery,
  useGetExploreProductsQuery,
} = productApiSLice;
