import MainLayout from "./layout/MainLayout";
import { Routes, Route } from "react-router-dom";
import { routes } from "./router/path";
import { Fragment } from "react";

function App() {
  // const elements = useRoutes(paths);
  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.element;
        let Layout = MainLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        return (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{<Page />}</Layout>}
          />
        );
      })}
    </Routes>
  );
}

export default App;
