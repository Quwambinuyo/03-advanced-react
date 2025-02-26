import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const fakeId = Date.now();

    const newUser = { id: fakeId, name };
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);

    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map((user) => {
        const { name, id } = user;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeUser(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
