import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonssContainer from "./components/ButtonssContainer";
function App() {
  return (
    <div className={styles.calculator}>
      {/* <input type="text" className={styles.display} /> */}
      <Display></Display>
      <ButtonssContainer></ButtonssContainer>
    </div>
  );
}
export default App;
