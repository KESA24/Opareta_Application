import { useState } from "react";
import DateTime from "./components/DateTime";
import Areas from "./components/AreaArray";
import Button from "./components/Button";

function App(input) {
  const [showInput, setshowInput] = useState(false);
  return (
    <>
      <div className="container">
        <Button
          text={showInput ? "Date and Time" : "Registered Areas"}
          className="btn"
          onClick={() => setshowInput(!showInput)}
        >
          Date and Time
        </Button>
        {showInput ? <Areas /> : <DateTime />}
      </div>
    </>
  );
}

export default App;
