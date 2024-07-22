import "./index.css";
import { List } from "antd-mobile";
import { AppstoreOutline } from "antd-mobile-icons";
function Home() {
  const navigate = useNavigate();

  const egList = [
    {
      title: "Mobx",
      path: "/pages/mobx",
    },
  ];

  function handleClick(path) {
    navigate(path);
  }

  return (
    <>
      <List header="演示">
        {egList.map((item, index) => (
          <List.Item
            key={index}
            prefix={<AppstoreOutline />}
            onClick={() => handleClick(item.path)}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
    </>
  );
}

export default Home;
