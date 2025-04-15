// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/job">JOB</Link></li>
        <li><a href="#">BEST DEALS</a></li>
        <li><a href="#">OFFERS</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="log-in">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
