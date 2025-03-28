import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(10);
  // const defaultCount = count + 10;

  // const handleClick = () => {
  //   if (count === 0) {
  //     setCount(defaultCount);
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  const handleClick = () => {
    if (count === 0) {
      setCount(count + 10);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>UseState Basics</h1>
      <h1>
        You clicked me {count} {count <= 1 ? "time" : "times"}
      </h1>
      <button className="btn" type="button" onClick={handleClick}>
        Click me
      </button>
      {/* <button
        className={`btn px-4 py-2 rounded ${
          count === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        type="button"
        onClick={handleClick}
        disabled={count === 0} // Disables the button when count is 0
      >
        Click me
      </button> */}
    </>
  );
};

export default UseStateBasics;
