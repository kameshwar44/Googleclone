import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavComponent">
    
      <NavLink className="NavLinkComponent" to="https://mail.google.com/mail/">
        <li>Gmail</li>
      </NavLink>
      <NavLink className="NavLinkComponent" to="/Images">
        <li>Images</li>
      </NavLink>
      <NavLink className="NavLinkComponent" to="/about">
        <li><i class="bi bi-grid-3x3-gap"></i></li>
      </NavLink>
      <NavLink className="NavLinkComponentPublic" to="/contact">
        <li> <i class="bi bi-person-circle"></i></li>
      </NavLink>
   
    </div>
  );
}

export default Navbar;
