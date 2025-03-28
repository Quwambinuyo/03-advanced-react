import { useEffect } from "react";

const Person = ({ id, name, removePerson }) => {
  console.log("render");

  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default Person;
