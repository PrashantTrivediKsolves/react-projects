import { useState, useRef } from "react";
import { IoMdPersonAdd } from "react-icons/io";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");

  // const [todoDate, setTodoDate] = useState("");

  const noOfUpdates = useRef(0);

  const todoNameElement = useRef();

  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   console.log(event);
  //   // setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   console.log(event);
  //   // setTodoDate(event.target.value);
  //   console.log(`noOfUpdates are :${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);

    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <div class="container">
      <form onSubmit={handleAddButtonClicked} class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // onChange={handleNameChange}
            // value={todoName}
          />
        </div>
        <div class="col-3">
          <input
            type="date"
            // onChange={handleDateChange}
            // value={todoDate}
            ref={dueDateElement}
          />
        </div>
        <div class="col-2">
          <button
            // onClick={handleAddButtonClicked}
            // type="button"
            class="btn btn-success kg-button"
          >
            <IoMdPersonAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
