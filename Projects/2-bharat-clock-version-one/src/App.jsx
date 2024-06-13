import ClockHeading from "./components/ClockHeading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
