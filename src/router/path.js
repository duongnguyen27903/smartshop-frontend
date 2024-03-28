import Account from "../component/Account";
import Product from "../component/Product";
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
    path: "account",
    element: Account,
    layout: HeaderOnly,
  },
  {
    path: "/:brand/:brandId",
    element: Category,
  },
  {
    path: "/:brand/:brandId/:id",
    element: Product,
  },
  {
    path: "/cart",
    element: Cart,
    layout: HeaderOnly,
  },
];
