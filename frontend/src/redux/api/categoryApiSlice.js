import { apiSlice } from "./apiSlice";
import { CATEGORY_URL } from "../constants";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/`,
      }),
    }),
  }),
});
export const { useGetAllCategoriesQuery } = categoryApiSlice;
