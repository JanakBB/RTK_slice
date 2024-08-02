import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
    baseQuery: fetchBaseQuery("https://mockapi.io/projects/66ac436af009b9d5c73177a2#"),
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: () => "/curd"
        }),
    }),
})