import "./tabBar.less";
import { TabBar } from "antd-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import pageStore from "/@/store/page";

const LayoutTabBar = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (path) => {
    navigate(path, { replace: true });
  };
  const tabs = pageStore.getMenu;
  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
});

export default LayoutTabBar;
