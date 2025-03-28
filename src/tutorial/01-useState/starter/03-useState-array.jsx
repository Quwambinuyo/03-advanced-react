import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(id);
  };

  const clearAllItems = () => {
    if (people.length === 0) {
      setPeople(data);
    } else {
      setPeople([]);
    }
  };

  return (
    <>
      <h1>useState array example</h1>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>

            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}

      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={clearAllItems}
      >
        {" "}
        {people.length === 0 ? "Reset" : "Clear all"}
      </button>
    </>
  );
};

export default UseStateArray;
