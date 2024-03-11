import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./authen/SignIn";
import SignUp from "./authen/SignUp";
import Category from "./pages/Category";

function App() {
  const elements = useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Category />,
    },
  ]);
  return <MainLayout>{elements}</MainLayout>;
}

export default App;
