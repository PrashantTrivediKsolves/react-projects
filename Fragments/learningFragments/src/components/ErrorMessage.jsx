const ErrorMessage = ({ items }) => {
  // let foodItems = [
  //   "Dal",
  //   "Green vegitable",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "ghee",
  //   "frutes",
  // ];
  let foodItems = items;

  return <div>{foodItems.length === 0 && <h3> am still hungry</h3>}</div>;
};

export default ErrorMessage;
