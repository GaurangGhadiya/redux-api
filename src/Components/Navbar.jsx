import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/authors/:id">
        About
      </NavLink>
      <NavLink className="navlink" to="/authors">
        Authors
      </NavLink>
      <NavLink className="navlink" to="/authors/add-author">
        Add Authors
      </NavLink>
    </div>
  );
};

export default Navbar;

