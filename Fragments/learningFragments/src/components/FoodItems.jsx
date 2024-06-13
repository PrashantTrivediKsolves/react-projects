import Item from "./Item";

const FoodItems = ({ items }) => {
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
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => {
            console.log("clicked");
          }}
        ></Item>
      ))}

      {/* <li class="list-group-item">Green vegitable</li>
      <li class="list-group-item">Roti</li>
      <li class="list-group-item">Salad</li>
      <li class="list-group-item">Milk</li> */}
    </ul>
  );
};

export default FoodItems;
