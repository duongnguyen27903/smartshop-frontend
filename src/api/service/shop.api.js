import { api } from "../api";

export const category_api = async () => {
  return await api
    .get("shop/get_categories")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
