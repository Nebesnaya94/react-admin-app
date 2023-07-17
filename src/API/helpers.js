import { API_URL, httpClient } from "./dataProvider";

export async function fetchFullName(id) {
  try {
    const { body } = await httpClient(`${API_URL}/contacts/${id}/open`, {
      method: "POST",
      body: "",
    });
    return body.split(/(?=[A-Z])/).join(" ");
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchFilteredData(filter) {
  try {
    const { json } = await httpClient(`${API_URL}/contacts/${filter}`);
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function upFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
