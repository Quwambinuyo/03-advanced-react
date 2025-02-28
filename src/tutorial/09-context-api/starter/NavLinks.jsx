import React from "react";
import UserContainer from "./Usercontainer";

// NavLinks Component
const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      {/* Pass user and logout props explicitly */}
      <UserContainer />
    </div>
  );
};

export default NavLinks;
