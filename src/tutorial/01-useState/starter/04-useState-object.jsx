import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 22,
    hobby: "Skiing",
  });

  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(22);
  // const [hobby, setHobby] = useState("Skiing");

  const displayProfile = () => {
    setPerson({ name: "John", age: 23, hobby: "Surfing" });

    // setName("John");
    // setAge(23);
    // setHobby("Surfing");
  };

  const { name, age, hobby } = person;

  return (
    <>
      <h1>useState object example</h1>

      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>Enjoys: {hobby}</h2>
        <button onClick={displayProfile} className="btn">
          Show john
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
