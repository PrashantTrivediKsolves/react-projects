import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [
  //   "Dal",
  //   "Green vegitable",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "ghee",
  //   "frutes",
  // ];

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>;
  // }

  // let textStateArr = useState("Food item Entered by the user");

  // let textStateVal = textStateArr[0];
  // console.log("current text state value is ", textStateVal);
  // let setTextState = textStateArr[1];
  let [textStateVal, setTextState] = useState("Food item Entered by the user");

  let [foodItems, setFoodItems] = useState([
    // "Salad",
    // "Green Vegetable",
    // "Roti",
  ]);
  console.log("current text state value is ", textStateVal);

  // let textToShow = "Food item Entered by the user";

  const handleOnKeyDown = (event) => {
    //event ->>> will give the synthetic objects...
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      console.log(newFoodItem);

      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    // console.log(event.target.value);
    // // textToShow = event.target.value;
    // textStateVal = setTextState((textStateVal = event.target.value));
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Heathy Food</h1>
        {/* <p>{textStateVal}</p> */}
        {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null}
         */}
        {/* {foodItems.length === 0 && <h3> am still hungry</h3>} */}
        {/* 
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
        {/* <li class="list-group-item">Green vegitable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li> */}
        {/* </ul>  */}

        {/* <input type="text" /> */}
        <FoodInput onKeyDown={handleOnKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}
export default App;
