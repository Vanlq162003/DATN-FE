import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["Cart"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (build) => ({}),
});

export const {} = cartApi;
