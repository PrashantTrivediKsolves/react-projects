import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButton, bought }) => {
  console.log(styles);

  const handleBuyButtonClicked = (event) => {
    alert(event);
    alert(`${foodItem} being  bought`);
  };
  return (
    <li
      key={foodItem}
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={(event) => handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
