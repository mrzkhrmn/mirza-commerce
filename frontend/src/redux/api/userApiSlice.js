import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `${USER_URL}/users`,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userApiSlice;
