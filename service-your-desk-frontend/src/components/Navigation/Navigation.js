import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Messenger from "../Messenger/Messenger";
function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/bookings" className="nav-link">Bookings</Link>
          <Link to="/auth">
            <button className="button-primary">Sign In</button>
          </Link>
          <Messenger />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
