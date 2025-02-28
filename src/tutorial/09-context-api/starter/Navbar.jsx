import React, { createContext, useState } from "react";
import NavLinks from "./Navlinks";

export const NavbarContext = createContext();

// Navbar Component
const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });

  // Logout function to remove user
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>PROP DRILLING</h5>
        {/* Passing user and logout as props */}
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
