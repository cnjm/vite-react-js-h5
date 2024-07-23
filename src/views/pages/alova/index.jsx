import { Button } from "antd-mobile";
import { useRequest } from "alova";
import { getUserInfo, editUserInfo } from "/@/api/methods/user.js";

const Alova = () => {
  const { data } = useRequest(getUserInfo(1));
  console.log(data);

  async function edit() {
    const res = await editUserInfo();
    console.log(res);
  }
  return (
    <>
      <Button color="primary" onClick={edit}>
        POST
      </Button>
    </>
  );
};

export default Alova;
