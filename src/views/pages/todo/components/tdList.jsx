import { List, SwipeAction } from "antd-mobile";
import PropTypes from "prop-types";
import pageStore from "/@/store/page";

const TdList = ({ list, deleteItem }) => {
  const disabledIndex = pageStore.disabledIndex;
  const rightActions = (index) => {
    if (index === disabledIndex) {
      return [];
    }
    return [
      {
        key: "delete",
        text: "删除",
        color: "danger",
        onClick: async () => {
          deleteItem(index);
        },
      },
    ];
  };
  return (
    <List>
      {list.map((item, index) => (
        <SwipeAction key={item} rightActions={rightActions(index)}>
          <List.Item disabled={index === disabledIndex}>{item}</List.Item>
        </SwipeAction>
      ))}
    </List>
  );
};
TdList.propTypes = {
  list: PropTypes.array,
  deleteItem: PropTypes.func,
};
export default TdList;
