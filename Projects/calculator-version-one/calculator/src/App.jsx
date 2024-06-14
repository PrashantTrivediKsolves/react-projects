import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonssContainer from "./components/ButtonssContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      {/* <input type="text" className={styles.display} /> */}
      <Display displayValue={calVal}></Display>
      <ButtonssContainer onButtonClick={onButtonClick}></ButtonssContainer>
    </div>
  );
}
export default App;
