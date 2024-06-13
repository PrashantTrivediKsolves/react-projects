import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="Enter Food item here "
      className={styles.foodInput}
      // onChange={(event) => console.log(event.target.value)}
      onChange={handleOnChange}
    />
  );
};
export default FoodInput;
