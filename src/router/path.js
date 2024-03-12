import Cart from "../layout/Cart";
import HeaderOnly from "../layout/HeaderOnly";
import Category from "../pages/Category";
import Home from "../pages/Home";

export const routes = [
  {
    path: "",
    element: Home,
  },
  {
    path: "/:category",
    element: Category,
  },
  {
    path: "/cart",
    element: Cart,
    layout: HeaderOnly,
  },
];
