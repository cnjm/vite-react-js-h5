import { observer } from "mobx-react-lite";
import { Form, Input, Button, Toast } from "antd-mobile";
import TdList from "./components/tdList";
import pageStore from "/@/store/page";

const Todo = observer(() => {
  const [list, setList] = useState(["禁止操作", "滑动删除"]);
  const disabledIndex = pageStore.disabledIndex;

  const deleteItem = (index) => {
    if (index === disabledIndex) {
      return Toast.show("禁止删除");
    }
    setList(list.filter((_item, i) => i !== index));
  };

  const onFinish = (values) => {
    if (list.some((item) => item === values.content)) {
      return Toast.show("待办项不可重复");
    }
    pageStore.setDisabledIndex();
    setList([...list, values.content]);
  };

  return (
    <>
      <div>
        <Form layout="horizontal" onFinish={onFinish}>
          <Form.Item
            name="content"
            label=""
            rules={[{ required: true, message: "不能为空" }]}
            extra={
              <Button block type="submit" color="primary" size="small">
                确定
              </Button>
            }
          >
            <Input placeholder="请输入待办事项" />
          </Form.Item>
        </Form>

        <TdList list={list} deleteItem={deleteItem} />
      </div>
    </>
  );
});

export default Todo;
