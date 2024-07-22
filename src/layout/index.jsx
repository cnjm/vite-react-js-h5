import TabBar from "./tabBar.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { routesMap } from "/@/router/routes";
import "./index.less";

const Fallback = () => {
  return <div>加载中...</div>;
};

const Layout = () => {
  const location = useLocation();
  const [showTabBar, setShowTabBar] = useState(true);
  useEffect(() => {
    const currentRoute = routesMap.find(
      (route) => route.path === location.pathname
    ) || {
      meta: {
        title: "首页",
        tabBar: true,
      },
    };
    const { title, tabBar } = currentRoute.meta || {};

    if (title) {
      document.title = title;
    }
    setShowTabBar(!!tabBar);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <main className="app-container">
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </main>
      {showTabBar && (
        <nav className="app-tab-bar">
          <TabBar />
        </nav>
      )}
    </div>
  );
};

export default Layout;
