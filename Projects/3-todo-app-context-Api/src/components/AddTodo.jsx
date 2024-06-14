import { useState, useRef } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { TodoItemsContext } from "../Store/Todo-items-store";
import { useContext } from "react";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const noOfUpdates = useRef(0);

  const todoNameElement = useRef();

  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <div class="container">
      <form onSubmit={handleAddButtonClicked} class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div class="col-3">
          <input type="date" ref={dueDateElement} />
        </div>
        <div class="col-2">
          <button class="btn btn-success kg-button">
            <IoMdPersonAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
