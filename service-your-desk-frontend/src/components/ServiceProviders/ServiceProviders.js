import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceProviders.css";
import image from "../../assets/images/worker.jpg";

function ServiceProviders() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const serviceNameToIdMapping = {
    Plumbing: 1,
    Electrical: 2,
    Cleaning: 3,
    Painting: 4,
    Carpentry: 5,
    Gardening: 6,
    "Pest Control": 7,
    HVAC: 8,
    Moving: 9,
    Landscaping: 10,
  };

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`${API_URL}/providers`)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching providers");
        return res.json();
      })
      .then((data) => {
        const serviceId = serviceNameToIdMapping[serviceName];
        const filtered = data.filter(
          (provider) => provider.serviceId === serviceId
        );
        setProviders(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [serviceName]);

  const handleProviderClick = (providerId) => {
    navigate(`/provider/${providerId}`);
  };

  return (
    <div className="providers-container">
      <h2 className="title">Service Providers for {serviceName}</h2>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Services
      </button>

      {loading ? (
        <p className="info-text">Loading providers...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : providers.length === 0 ? (
        <p className="info-text">No providers found.</p>
      ) : (
        <div className="providers-grid">
          {providers.map((provider) => (
            <div
            key={provider.providerId}
            className="provider-card"
            onClick={(e) => {
              if (e.target.tagName.toLowerCase() !== "button") {
                handleProviderClick(provider.providerId);
              }
            }}
          >
          
              <img
                src={`https://source.unsplash.com/400x250/?${serviceName},worker&sig=${provider.providerId}`}
                onError={(e) => (e.target.src = image)}
                alt={provider.name}
                className="provider-image"
              />
              <h3 className="provider-name">{provider.name}</h3>
              <div className="provider-info">
                <h4 className="provider-title">{provider.title}</h4>
                <h5 className="provider-rating">
                  Rating: {provider.rating} ({provider.reviewCount} reviews)
                </h5>
                <h5>Experience: {provider.experience}</h5>
                <h5>Hourly Rate: ${provider.hourlyRate}/hour</h5>
                <h5>Availability: {provider.availability}</h5>
              </div>
              <button
                className="book-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleProviderClick(provider.providerId);
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceProviders;
