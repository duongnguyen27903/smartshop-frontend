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

//login api
export const login_action = async (signin) => {
  return await api.post("api/auth/login", signin);
};

export const signup_action = async (signup) => {
  return await api.post("api/auth/signup?role=user", signup);
};

//shop api
export const getBestSeller = async () => {
  return await api.get("api/shop/get_best_seller");
};

export const getCategories = async () => {
  return await api.get("api/shop/get_categories");
};

export const getProducts = async (brandId) => {
  return await api.get(`api/shop/get_products?id=${brandId}`);
};

export const getDetailProduct = async (id) => {
  return await api.get(`api/shop/get_detail_product?id=${id}`);
};

//account api
export const getCurrent = async (userId) => {
  return await auth_api.get(`api/account/get_current?userId=${userId}`);
};
