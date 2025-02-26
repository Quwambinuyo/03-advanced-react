import { useState } from "react";

const UseStateGotcha = () => {
  // Step 1: Initialize state with value 0
  const [value, setValue] = useState(0);

  // Step 2: Define the click event handler
  const handleClick = () => {
    // Synchronous state update - happens immediately
    // setValue((currentState) => {
    //   console.log("Clicked the button");
    //   console.log(currentState);
    //   const newState = currentState + 1;
    //   return newState; // Increments state by 1
    // });

    // Asynchronous state update - happens after 3 seconds
    setTimeout(() => {
      console.log("Clicked the button");

      setValue((currentState) => {
        return currentState + 1; // Uses latest state at that time
      });
    }, 3000);
  };

  return (
    <>
      {/* Heading */}
      <h1>useState "Gotcha"</h1>

      {/* Display the current value */}
      <h1>{value}</h1>

      {/* Button to trigger the state update */}
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
