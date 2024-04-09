import Account from "../component/account/Account";
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
    path: "/:brandId",
    element: Category,
  },
  {
    path: "/:brandId/:id",
    element: Product,
  },
  {
    path: "/cart",
    element: Cart,
    layout: HeaderOnly,
  },
];
