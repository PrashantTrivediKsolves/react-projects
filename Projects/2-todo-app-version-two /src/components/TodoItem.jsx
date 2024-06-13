function TodoItem({ todoName, TodoDate }) {
  // let todoName = "Go to College";
  // let TodoDate = "12/06/2024";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-3">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
