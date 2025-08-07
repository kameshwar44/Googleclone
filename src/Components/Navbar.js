import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="NavComponent" role="navigation" aria-label="Main navigation">
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li>
          <a 
            className="NavLinkComponent" 
            href="https://mail.google.com/mail/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            Gmail
          </a>
        </li>
        <li>
          <NavLink 
            className="NavLinkComponent" 
            to="/images"
            aria-label="Image search"
          >
            Images
          </NavLink>
        </li>
        <li>
          <NavLink 
            className="NavLinkComponent" 
            to="/apps"
            aria-label="Google apps menu"
          >
            <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i>
          </NavLink>
        </li>
        <li>
          <NavLink 
            className="NavLinkComponentPublic" 
            to="/account"
            aria-label="User account"
          >
            <i className="bi bi-person-circle" aria-hidden="true"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
