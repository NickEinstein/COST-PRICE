import { todoorsApi } from "configs/StoreQueryConfig";

const BASE_URL = "/api";

export const UserApi = todoorsApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/users/register`,
        method: "POST",
        ...config,
      }),
    }),
    login: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        ...config,
      }),
    }),
    getCompanyStatistics: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/company/companyStatistics`,
          method: "GET",
        };
      },
    }),

    addBike: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/company/addBike`,
        method: "POST",
        ...config,
      }),
    }),

    updateBike: builder.mutation({
      query: (arg) => {
        const { userId } = arg;
        return {
          url: `${BASE_URL}/company/updateBike`,
          method: "PUT",
          ...arg,
          params: { userId },
        };
      },
    }),

   

    deleteBike: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/company/deleteBike`,
        method: "DELETE",
        ...config,
      }),
    }),

 

    getAllBikes: builder.query({
      query: (config) => {
        return {
          url: `${BASE_URL}/company/bikes`,
          method: "GET",
          ...config,
        };
      },
    }),

    getRiderTripStatistics: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/company/companyTripStatics`,
          method: "GET",
        };
      },
    }),

    getEarningsByMonth: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/company/getTotalEarningsByMonth`,
          method: "GET",
        };
      },
    }),

    getTripsByMonth: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/company/getTotalTripsByMonth`,
          method: "GET",
        };
      },
    }),

    getHistory: builder.query({
      query: (arg) => {
        const { to, from, riderId } = arg;
        return {
          url: `${BASE_URL}/company/history`,
          method: "GET",
          params: { to, from, riderId },
        };
      },
    }),

    getBanks: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/payment/getAllBanks`,
          method: "GET",
        };
      },
    }),
    updateUser: builder.mutation({
      query: (arg) => {
        return {
          url: `${BASE_URL}/users`,
          method: "PUT",
          ...arg,
        };
      },
    }),
    updateUserUpload: builder.mutation({
      query: (arg) => {
        return {
          url: `${BASE_URL}/users/upload`,
          method: "PUT",
          ...arg,
        };
      },
    }),

    getUser: builder.query({
      query: (arg) => {
        const { userId } = arg;
        return {
          url: `${BASE_URL}/users/getUserById`,
          method: "GET",
          params: { userId },
        };
      },
    }),
  }),
});

export default UserApi;
