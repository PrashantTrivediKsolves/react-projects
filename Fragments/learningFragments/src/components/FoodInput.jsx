import styles from "./FoodInput.module.css";

const FoodInput = ({ onKeyDown }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      type="text"
      placeholder="Enter Food item here "
      className={styles.foodInput}
      // onChange={(event) => console.log(event.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};
export default FoodInput;
