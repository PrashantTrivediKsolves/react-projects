import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../Store/Todo-items-store";
import { useContext } from "react";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem item={item}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
