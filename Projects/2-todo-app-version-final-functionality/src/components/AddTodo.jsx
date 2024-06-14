import { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    console.log(event);
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    console.log(event);
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div class="col-3">
          <input type="date" onChange={handleDateChange} value={todoDate} />
        </div>
        <div class="col-2">
          <button
            onClick={handleAddButtonClicked}
            type="button"
            class="btn btn-success kg-button"
          >
            <IoMdPersonAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
