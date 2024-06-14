import styles from "./ButtonssContainer.module.css";
const ButtonssContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {buttonNames.map((button) => (
        <button className={styles.button} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonssContainer;
