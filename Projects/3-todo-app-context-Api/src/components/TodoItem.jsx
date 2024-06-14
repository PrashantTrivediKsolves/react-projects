import { MdAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/Todo-items-store";
import { useContext } from "react";
function TodoItem({ item }) {
  const { deleteItem } = useContext(TodoItemsContext);
  let todoName = item.name;
  let TodoDate = item.birth;
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-3">{TodoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
