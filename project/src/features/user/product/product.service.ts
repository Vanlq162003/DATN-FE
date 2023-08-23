import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api"}),
    endpoints: (build) => ({
        
    }),
})

export const {} = productApi