import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = (props) => {
  const { data, changeStatus } = props;
  return (
    <div className="todo-list-container">
      {data.map((item) => {
        return (
          <div
            key={item.name}
            className={
              item.isComplete
                ? "todo-item-container"
                : "todo-item-container done"
            }
          >
            {item.isComplete ? (
              <FaRegCircle className="item-done-button" color="#9a9a9a" />
            ) : (
              <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
            )}
            <div className="item-title">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
