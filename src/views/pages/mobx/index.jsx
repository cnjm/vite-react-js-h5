import { observer } from "mobx-react-lite";
import { Button } from "antd-mobile";
import pageStore from "/@/store/page";

const Mobx = observer(() => {
  const count = pageStore.count;
  const setCount = () => {
    pageStore.addCount();
  };
  return (
    <>
      <Button color="primary" onClick={() => setCount()}>
        count is {count}
      </Button>
    </>
  );
});

export default Mobx;
