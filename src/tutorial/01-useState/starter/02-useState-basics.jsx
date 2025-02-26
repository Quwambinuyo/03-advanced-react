import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>UseState Basics</h1>
      <h1>You clicked me {count} times</h1>
      <button className="btn" type="button" onClick={handleClick}>
        clicked me{" "}
      </button>
    </>
  );
};

export default UseStateBasics;
