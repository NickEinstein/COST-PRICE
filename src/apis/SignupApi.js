import { todoorsApi } from "configs/StoreQueryConfig";

const BASE_URL = "/api/v1/clients";

export const SignupApi = todoorsApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/signup`,
        method: "POST",
        ...config,
      }),
    }),
  }),
});

export default SignupApi;
