import { useAppContext } from "./Navbar";

// UserContainer Component
const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {/* Conditional rendering based on user existence */}
      {user ? (
        <>
          <p>Hello There, {user?.name.toUpperCase()}</p>

          {/* Logout button */}
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
