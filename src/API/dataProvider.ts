import { fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

export const API_URL = "https://jsonplaceholder.typicode.com";

export const httpClient = fetchUtils.fetchJson;

export const dataProvider = jsonServerProvider(
  import.meta.env.VITE_JSON_SERVER_URL
);
