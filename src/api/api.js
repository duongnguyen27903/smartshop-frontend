import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const auth_api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
});

export const getBestSeller = () => {
  return api.get("shop/get_best_seller");
};
