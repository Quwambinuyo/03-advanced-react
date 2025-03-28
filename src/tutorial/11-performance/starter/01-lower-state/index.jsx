import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Counter from "./Counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section>
      <Counter />
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
