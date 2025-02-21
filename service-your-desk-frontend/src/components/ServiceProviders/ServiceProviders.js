import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceProviders.css";

// Sample data for service providers
const mockServiceProviders = {
  Plumbing: [
    {
      id: "john-smith",
      name: "John Smith",
      image:
        "https://readdy.ai/api/search-image?query=professional+plumber",
      title: "Master Plumber",
      rating: 4.9,
      reviews: 120,
      experience: "15+ years",
      hourlyRate: 75,
      availability: "Available Today",
    },
    {
      id: "robert-johnson",
      name: "Robert Johnson",
      image:
        "https://public.readdy.ai/ai/img_res/972e1e0b0a9bc580ac214b0f5530bff9.jpg",
      title: "Licensed Plumber",
      rating: 4.8,
      reviews: 95,
      experience: "12+ years",
      hourlyRate: 70,
      availability: "Available Tomorrow",
    },
  ],
  Electrical: [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      image:
        "https://readdy.ai/api/search-image?query=professional+electrician",
      title: "Master Electrician",
      rating: 4.9,
      reviews: 150,
      experience: "10+ years",
      hourlyRate: 85,
      availability: "Available Today",
    },
  ],
};

function ServiceProviders() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const providers = mockServiceProviders[serviceName] || [];

  return (
    <div className="service-providers-container">
      <div className="service-providers-header">
        <h3>
          Service Providers for <span className="text-primary">{serviceName}</span>
        </h3>
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Services
        </button>
      </div>
      <div className="providers-grid">
        {providers.map((provider, idx) => (
          <div key={idx} className="provider-card">
            <div className="provider-info">
              <img
                src={provider.image}
                alt={provider.name}
                className="provider-image"
              />
              <div className="provider-details">
                <h4 className="provider-name">{provider.name}</h4>
                <p className="provider-title">{provider.title}</p>
                <p className="provider-rating">
                  {provider.rating} ({provider.reviews} reviews)
                </p>
                <p className="provider-experience">
                  Experience: {provider.experience}
                </p>
                <p className="provider-hourly">${provider.hourlyRate}/hour</p>
              </div>
            </div>
            <button
              className="button-primary"
              onClick={() =>
                navigate(`/provider/${provider.id}`)
              }
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceProviders;
