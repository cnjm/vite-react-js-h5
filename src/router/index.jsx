import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

// 将从pages文件夹下导入所有的index.jsx
const routeList = () => {
  const list = [];
  const viewsFile = import.meta.glob("/src/views/pages/**/index.jsx");
  const reg = new RegExp(/\/src\/views(\S*)\/index\.jsx/);
  Object.entries(viewsFile).forEach(([key, page]) => {
    const itemPath = key.match(reg) || [];
    if (itemPath.length) {
      let Module = lazy(page);
      list.push({
        path: itemPath[1],
        element: <Module />,
      });
    }
  });
  return list;
};
// 也可手动导入
const Layout = lazy(() => import("/@/layout/index.jsx"));
const Home = lazy(() => import("/@/views/home/index.jsx"));
const Mine = lazy(() => import("/@/views/mine/index.jsx"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mine",
        element: <Mine />,
      },
      ...routeList(),
    ],
  },
];
const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
