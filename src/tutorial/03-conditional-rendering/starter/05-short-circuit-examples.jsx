import { useState } from "react";

const SomeComponent = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

const ShortCircuitExamples = () => {
  // Falsy value
  const [text, setText] = useState("");
  // Truthy values
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <>
      <h2>Short Circuit - Examples</h2>
      <div>
        {/* OR (||) Operator: If 'text' is falsy, show "default value" */}
        <h2>{text || "default value"}</h2>

        {/* AND (&&) Operator: If 'text' is truthy, this section will render */}
        {text && (
          <div>
            <h2>whatever return</h2>
            <h2>{name}</h2>
          </div>
        )}

        {/* If 'user' exists, render SomeComponent */}
        {user && <SomeComponent name={user.name} />}

        <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>

        {/* Button text changes based on 'isEditing' state */}
        <button className="btn">{isEditing ? "edit" : "add"}</button>
        {user ? (
          <div>
            <h4>hello there user {user.name}</h4>
          </div>
        ) : (
          <div>
            <h2>Please login</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ShortCircuitExamples;
