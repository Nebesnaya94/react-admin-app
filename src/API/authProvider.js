import { API_URL } from "./dataProvider";
import { fetchUtils } from "react-admin";

const httpClient = fetchUtils.fetchJson;

export const authProvider = {
  login: ({ email, password, id }) => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("accessToken", id);
    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
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
