import { API_URL } from "./dataProvider";
import { fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;

export const authProvider = {
  login: ({ email, password }) =>
    httpClient(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }).then(
      ({ json }) => (
        localStorage.setItem("accessToken", json.accessToken),
        localStorage.setItem("refreshToken", json.refreshToken)
      )
    ),

  logout: () => {
    localStorage.removeItem("accessToken");
    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("accessToken") ? Promise.resolve() : Promise.reject(),

  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("accessToken");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(""),
};
