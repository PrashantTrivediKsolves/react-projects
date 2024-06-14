import { useState } from "react";
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

  let [activeItems, setActiveItems] = useState([]);

  let foodItems = items;

  let onBuyButton = (item, event) => {
    if (activeItems.indexOf(item) > -1) {
      let newFoodItems = [...activeItems];
      let idx = newFoodItems.indexOf(item);
      if (idx > -1) {
        // only splice array when item is found
        newFoodItems.splice(idx, 1); // 2nd parameter means remove one item only...................
        setActiveItems(newFoodItems);
      }
    } else {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
    }
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
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
