import { API_URL, API_KEY } from "../utils/constants";

export const getTopNews = section => {
  const url = new URL(`${API_URL + section}.json`);
  const param = [["api-key", API_KEY]];
  url.search = new URLSearchParams(param);
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
