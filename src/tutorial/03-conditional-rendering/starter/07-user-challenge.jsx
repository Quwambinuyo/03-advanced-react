import { useState, useEffect } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "vegan food truck" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Challenge</h2>
      {user ? (
        <div>
          <h4 className="text-lg">Hello there, {user.name}</h4>
          <button
            className="btn bg-red-500 text-white p-2 mt-2 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4 className="text-lg">Please login</h4>
          <button
            className="btn bg-blue-500 text-white p-2 mt-2 rounded"
            onClick={login}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return <h1>Random Component</h1>;
};

export default UserChallenge;
