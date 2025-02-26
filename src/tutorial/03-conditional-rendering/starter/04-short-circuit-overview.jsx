import { useState } from "react";

const ShortCircuitOverview = () => {
  // Falsy Value (empty string) - this is initially empty, which is falsy
  const [text, setText] = useState("");

  // Truthy Value (non-empty string) - this has a value, making it truthy
  const [name, setName] = useState("susan");

  return (
    <>
      <h2>Short Circuit Overview</h2>

      <div>
        {/* OR (||) Operator: If 'text' is falsy, return "hello word" */}
        <h4>Falsy OR : {text || "hello word"}</h4>
        {/* Since text = "", which is falsy, "hello word" will be displayed */}

        {/* AND (&&) Operator: If 'text' is truthy, return "hello word", otherwise return falsy value */}
        <h4>Falsy AND : {text && "hello word"}</h4>
        {/* Since text = "", which is falsy, nothing will be displayed */}

        {/* OR (||) Operator: If 'name' is falsy, return "hello word" */}
        <h4>Truthy OR : {name || "hello word"}</h4>
        {/* Since name = "susan" (truthy), it will display "susan" */}

        {/* AND (&&) Operator: If 'name' is truthy, return "hello word", otherwise return falsy value */}
        <h4>Truthy AND : {name && "hello word"}</h4>
        {/* Since name = "susan" (truthy), it will display "hello word" */}
      </div>
    </>
  );
};

export default ShortCircuitOverview;
