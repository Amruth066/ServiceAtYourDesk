import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const servicesData = [
  { name: "Plumbing", icon: "🔧", price: "From $75/hour" },
  { name: "Electrical", icon: "💡", price: "From $85/hour" },
  { name: "Cleaning", icon: "🧹", price: "From $45/hour" },
  { name: "Painting", icon: "🎨", price: "From $65/hour" },
];

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName) => {
    navigate(`/service/${serviceName}`);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">All Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleServiceClick(service.name)}
            >
              <div className="card-icon">{service.icon}</div>
              <h3 className="card-title">{service.name}</h3>
              <p className="card-subtitle">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
