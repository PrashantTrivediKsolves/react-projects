import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
function App() {
  const todo_items = [
    {
      name: "prashant",
      birth: "11/04/2002",
    },
    {
      name: "surendra",
      birth: "11/04/2002",
    },
    {
      name: "Archana",
      birth: "11/04/2002",
    },
    {
      name: "Anurag",
      birth: "11/04/2002",
    },
  ];
  return (
    <center className="todo-container">
      {/* <h1>Todo App</h1> */}
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todo_items}></TodoItems>
    </center>
  );
}

export default App;
