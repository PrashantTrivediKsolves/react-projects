import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} TodoDate={item.birth}></TodoItem>
        ))}

        {/* <TodoItem todoName={"surendra"} TodoDate={"11/04/2002"}></TodoItem>
        <TodoItem todoName={"Archana"} TodoDate={"11/04/2002"}></TodoItem> */}

        {/* <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2> */}
      </div>
    </>
  );
};
export default TodoItems;
