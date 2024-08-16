import { todoorsApi } from "configs/StoreQueryConfig";

const BASE_URL = "";

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
        url: `${BASE_URL}/auth/signin`,
        method: "POST",
        ...config,
      }),
    }),

    updateProoduct: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/product/update/${config?.data?.product_id}`,

        method: "POST",
        ...config,
      }),
    }),

    unVerifyProoduct: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/product_listing/unverify-product-listing/${config?.data?.listing_id}`,

        method: "POST",
        // ...config,
      }),
    }),

    VerifyProoduct: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/product_listing/verify-product-listing/${config?.data?.listing_id}`,

        method: "POST",
        // ...config,
      }),
    }),
    getUserProfile: builder.query({
      query: (arg) => {
        return {
          url: `${BASE_URL}/user`,
          method: "GET",
        };
      },
    }),

    addBasicProfile: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/user/update/basic-details`,
        method: "POST",
        ...config,
      }),
    }),

    addBusinessProfile: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/user/update/business-details`,
        method: "POST",
        ...config,
      }),
    }),

    addProduct: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/product`,
        method: "POST",
        ...config,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/product/delete/${config?.productId}`,
        method: "DELETE",
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

    getProducts: builder.query({
      query: (config) => {
        return {
          url: `${BASE_URL}/product/user/mine`,
          method: "GET",
          ...config,
        };
      },
    }),
    getProductsById: builder.query({
      query: (arg) => {
        const { productId } = arg;
        return {
          url: `${BASE_URL}/product/${productId}`,
          method: "GET",
          // params: { productId },
        };
      },
    }),

    getCategories: builder.query({
      query: (config) => {
        return {
          url: `${BASE_URL}/category`,
          method: "GET",
          ...config,
        };
      },
    }),

    getSubCategories: builder.query({
      query: (config) => {
        const { categoryId } = config;
        console.log(config)

        return {
          url: `${BASE_URL}/sub_category/category/${categoryId}`,
          method: "GET",
          ...config,
        };
      },
    }),

    getSubCategoriesById: builder.query({
      query: (arg) => {
        const { categoryId } = arg;
        return {
          url: `${BASE_URL}/category/${categoryId}`,
          method: "GET",
          params: { categoryId },
        };
      },
    }),
    getMerchants: builder.query({
      query: (config) => {
        return {
          url: `${BASE_URL}/product_listing/merchants-listing-my-products`,
          method: "GET",
          ...config,
        };
      },
    }),
    getMerchantProductsByMerchantID: builder.query({
      query: (config) => {
        return {
          url: `${BASE_URL}/product_listing/my-products-listed-by-merchant/${config?.merchantId}`,
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
