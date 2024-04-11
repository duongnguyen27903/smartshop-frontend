import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3002/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const auth_api = axios.create({
  baseURL: "http://localhost:3002/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
});
