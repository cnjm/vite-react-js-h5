import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import { routesMap } from "./routes";

const Layout = lazy(() => import("/@/layout/index.jsx"));
const NotFoundPage = lazy(() => import("/@/views/error/notFoundPage.jsx"));
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      ...routesMap.map((item) => {
        const Element = item.element;
        return {
          ...item,
          element: <Element />,
        };
      }),
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
