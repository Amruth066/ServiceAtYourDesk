import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  const services = [
    "Plumbing",
    "Electrical",
    "Cleaning",
    "Carpentry",
    "Painting",
    "Pest Control",
    "Home Repair",
  ];

  const handleSearch = () => {
    if (selectedService) {
      navigate(`/service/${selectedService}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="hero-title">
          Professional Services <br />
          <span className="text-primary">At Your Doorstep</span>
        </h1>
        <p className="hero-description">
          Find trusted professionals for all your home services. Book appointments easily and get the job done right.
        </p>
        <div className="search-bar">
          <select
            className="service-dropdown"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a Service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <button className="search-button" onClick={handleSearch} disabled={!selectedService}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
