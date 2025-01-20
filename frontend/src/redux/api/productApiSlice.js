import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSLice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `${PRODUCT_URL}/product`,
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/product/${id}`,
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
    getRelatedProducts: builder.query({
      query: (categories) => ({
        url: `${PRODUCT_URL}/related`,
        method: "POST",
        body: { categories },
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetBestSellingProductsQuery,
  useGetFlashSalesProductsQuery,
  useGetExploreProductsQuery,
  useGetRelatedProductsQuery,
  useGetAllProductsQuery,
} = productApiSLice;
