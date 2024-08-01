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

export const charge_money = async (userId, amount) => {
  return await auth_api.patch(
    `api/account/charge?userId=${userId}&amount=${amount}`
  );
};

export const createPaymentAccount = async (userId, account_number) => {
  return await auth_api.post(
    `api/account/create_payment_account?userId=${userId}&account_number=${account_number}`
  );
};

export const getTransactionHistory = async (userId, page) => {
  return await auth_api.get(
    `api/account/get_transaction_histories?userId=${userId}&page=${page}`
  );
};

export const buyProduct = async (id, userId, amount) => {
  return await auth_api.post("api/account/buy_product", {
    productId: Number(id),
    userId: userId,
    product_amount: amount,
  });
};

//cart api
export const getCart = async (userId) => {
  return await auth_api.get(`api/cart/get_cart?id=${userId}`);
};

export const deleteCart = async (cartId, userId) => {
  return await auth_api.delete(
    `api/cart/delete_cart?id=${cartId}&user=${userId}`
  );
};

export const saveCart = async (id, userId, amount) => {
  return await auth_api.post("api/cart/save_cart", {
    productId: Number(id),
    userId: userId,
    amount: amount,
  });
};

//user profile api
export const getProfile = async (userId) => {
  return await auth_api.get(`api/user-profile/get-profile?id=${userId}`);
};
