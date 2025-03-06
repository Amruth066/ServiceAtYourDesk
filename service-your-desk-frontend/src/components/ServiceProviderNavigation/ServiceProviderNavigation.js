import React from "react";
import { Link } from "react-router-dom";
import "./ServiceProviderNavigation.css";

const ServiceProviderNavigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="nav-links">
          <Link to="/serviceProviderProfile" className="nav-link">Profile</Link>
          <Link to="/serviceProviderBookings" className="nav-link">Current Bookings</Link>
        </div>
      </div>
    </nav>
  );
}

export default ServiceProviderNavigation;
