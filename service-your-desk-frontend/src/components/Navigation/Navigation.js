import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/bookings" className="nav-link">Bookings</a>
          <button className="button-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
