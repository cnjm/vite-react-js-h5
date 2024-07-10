import "./index.css";
import { List } from "antd-mobile";
import { AppstoreOutline } from "antd-mobile-icons";
function Home() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

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
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div></div>
        <p>
          Edit <code>Home</code> and save to test HMR
        </p>
      </div>
      <Button block color="primary" size="large">
        Block Button
      </Button> */}
    </>
  );
}

export default Home;
