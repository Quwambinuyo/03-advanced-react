import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "john",
    age: 22,
    hobby: "skiing",
  });

  const displayProfile = () => {
    setPerson((prevState) =>
      prevState.name === "john"
        ? { name: "peter", age: 23, hobby: "diving" }
        : { name: "john", age: 22, hobby: "skiing" }
    );
  };

  const { age, name, hobby } = person;

  return (
    <>
      <h1>useState object example</h1>

      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>Enjoys: {hobby}</h2>
        <button onClick={displayProfile} className="btn">
          {name === "john" ? "Show Peter" : "Show John"}
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
