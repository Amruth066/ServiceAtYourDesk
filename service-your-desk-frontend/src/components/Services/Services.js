import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import TopRatedServiceProviders from "../TopRatedServiceProviders/TopRatedServiceProviders";

const iconMapping = {
  Plumbing: "🔧",
  Electrical: "💡",
  Cleaning: "🧹",
  Painting: "🎨",
  Carpentry: "🔨",
  Gardening: "🌿",
  "Pest Control": "🐜",
  HVAC: "🌡️",
  Moving: "🚚",
  Landscaping: "🌳"
};

function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  const handleServiceClick = (serviceName) => {
    navigate(`/service/${serviceName}`);
  };

  return (
    <section className="services-section" id="services">
      <TopRatedServiceProviders />
      <div className="services-container">
        <h2 className="section-title">All Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleServiceClick(service.name)}
            >
              <div className="card-icon">
                {iconMapping[service.name] || service.name.charAt(0)}
              </div>
              <h3 className="card-title">{service.name}</h3>
              <p className="card-subtitle">
                {service.basePrice ? `From $${service.basePrice}/hour` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
}

export default Services;
