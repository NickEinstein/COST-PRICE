import store from "./StoreConfig";
import { logoutAction } from "./StoreActionConfig";
import { TodoorsHttp } from "./HttpConfig";
import Cookies from "universal-cookie";
import { LocalSee } from "@mui/icons-material";
const cookies = new Cookies();

TodoorsHttp.interceptors.request.use((config) => {
  const { accessToken } = store.getState().global.authUser || {};

  if (accessToken) {
    config.headers.Authorization = `${accessToken}`;
    localStorage.setItem("token", accessToken);
  }

  return config;
});

TodoorsHttp.interceptors.response.use(undefined, (error) => {
  console.log("TodoorsHttp", error?.message, error.toJSON());
  // if (error?.response?.status === 401 || error.message === "Network Error") {
  if (error?.response?.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});
