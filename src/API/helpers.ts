import { API_URL, httpClient } from "./dataProvider";

export async function fetchUser(userId: number) {
  try {
    const { json } = await httpClient(`${API_URL}/users/${userId}`);
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchFilteredData(filter: string) {
  try {
    const { json } = await httpClient(`${API_URL}/${filter}`);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function capitalize(str?: string) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
