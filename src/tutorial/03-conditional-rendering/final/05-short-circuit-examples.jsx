import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* content inside element */}
      <h2>{text || "default value"}</h2>
      {/* toggle element */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && <h4>also works</h4>}
      {/* toggle component */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      {/* inside element */}
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {/* toggle elements/components */}
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className="btn">log out</button>
    </div>
  );
};

// import { useState, useEffect } from "react";

// const ShortCircuitExamples = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className="p-4">
//       <button
//         className="btn bg-blue-500 text-white p-2 rounded"
//         onClick={() => setToggle(!toggle)}
//       >
//         Toggle Component
//       </button>

//       {toggle && <RandomComponent />}
//     </div>
//   );
// };

// const RandomComponent = () => {
//   useEffect(() => {
//     console.log("useEffect called");
//   }, []);

//   return <h1 className="text-lg font-bold mt-4">Hello there</h1>;
// };

export default ShortCircuitExamples;
