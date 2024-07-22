export const routesMap = [
  {
    index: true,
    element: lazy(() => import("/@/views/home/index.jsx")),
    meta: {
      title: "首页",
      tabBar: true,
    },
  },
  {
    path: "/mine",
    element: lazy(() => import("/@/views/mine/index.jsx")),
    meta: {
      title: "我的",
      tabBar: true,
    },
  },
  {
    path: "/pages/mobx",
    element: lazy(() => import("/@/views/pages/mobx/index.jsx")),
    meta: {
      title: "Mobx",
    },
  },
  {
    path: "/pages/todo",
    element: lazy(() => import("/@/views/pages/todo/index.jsx")),
    meta: {
      title: "Todo",
    },
  },
];
