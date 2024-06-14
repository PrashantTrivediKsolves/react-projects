import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

import { TodoItemsContext } from "./Store/Todo-items-store";
function App() {
  const initial_todo_items = [];
  const [todo_items, setTodoItems] = useState(initial_todo_items);

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    // this is functional update....
    setTodoItems((currentValue) => {
      let newItems = [...currentValue, { name: itemName, birth: itemDueDate }];
      return newItems;
    });
  };
  const deleteItem = (todoItemName) => {
    console.log(`Item Deleted:${todoItemName}`);
    const newTodoItem = todo_items.filter((item) => {
      return item.name !== todoItemName;
    });
    setTodoItems(newTodoItem);
  };
  const defaultTodoItems = [];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todo_items,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        {<WelcomeMessage></WelcomeMessage>}
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
