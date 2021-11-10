import { useState } from "react";
import DateTime from "./components/DateTime";
import Areas from "./components/AreaArray";
import Button from "./components/Button";
import Text from "./components/Text";


// Have a use state returning date time on false  and true returns the other and then have a function to return the array and whatever input
// function Others(input) {
//   if (input ==[]){
//     return (  
//       <Areas/>
//     ); 
//   } else {
//     return (
//       null
//     )
//   }
  
// }


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
        {showInput ? <Areas/> : <DateTime />}
      </div>
    </>
  );
}

export default App;
