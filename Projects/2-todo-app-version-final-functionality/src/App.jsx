import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initial_todo_items = [
    // {
    //   name: "prashant",
    //   birth: "11/04/2002",
    // },
    // {
    //   name: "surendra",
    //   birth: "11/04/2002",
    // },
    // {
    //   name: "Archana",
    //   birth: "11/04/2002",
    // },
    // {
    //   name: "Anurag",
    //   birth: "11/04/2002",
    // },
  ];
  const [todo_items, setTodoItems] = useState(initial_todo_items);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    // this is functional update....
    setTodoItems((currentValue) => {
      let newItems = [...currentValue, { name: itemName, birth: itemDueDate }];
      return newItems;
    });
  };
  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted:${todoItemName}`);
    const newTodoItem = todo_items.filter((item) => {
      return item.name !== todoItemName;
    });
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      {/* <h1>Todo App</h1> */}
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todo_items.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todo_items}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
