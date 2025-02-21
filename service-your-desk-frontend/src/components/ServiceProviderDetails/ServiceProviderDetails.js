import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as echarts from "echarts";
import "./ServiceProviderDetails.css";

const allProviders = {
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
      description:
        "John Smith is a highly experienced master plumber specializing in pipe repairs, drain cleaning, and water heater installations.",
      ratingDistribution: {
        "5 stars": 10,
        "4 stars": 5,
        "3 stars": 2,
        "2 stars": 1,
        "1 star": 1
      },
      clientReviews: [
        { client: "Alice", review: "Excellent work, highly recommended!", rating: 5 },
        { client: "Bob", review: "Very professional and punctual.", rating: 4 }
      ]
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
      description:
        "Robert Johnson handles emergency repairs and fixture installations with precision and care.",
      ratingDistribution: {
        "5 stars": 8,
        "4 stars": 6,
        "3 stars": 3,
        "2 stars": 1,
        "1 star": 1
      },
      previousWork: [
        "https://via.placeholder.com/150?text=Work+A",
        "https://via.placeholder.com/150?text=Work+B"
      ],
      clientReviews: [
        { client: "Charlie", review: "Good service overall.", rating: 4 },
        { client: "Dana", review: "Quick and efficient.", rating: 5 }
      ]
    }
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
      description:
        "Sarah Johnson is an expert in wiring, panel upgrades, and lighting installations, ensuring safety and quality.",
      ratingDistribution: {
        "5 stars": 12,
        "4 stars": 6,
        "3 stars": 3,
        "2 stars": 0,
        "1 star": 0
      },
      previousWork: [
        "https://via.placeholder.com/150?text=Project+1",
        "https://via.placeholder.com/150?text=Project+2"
      ],
      clientReviews: [
        { client: "Eve", review: "Outstanding service!", rating: 5 },
        { client: "Frank", review: "Very reliable and professional.", rating: 5 }
      ]
    }
  ]
};

function BookingModal({ onClose }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booked on ${date} at ${slot}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Book Appointment</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Time Slot:
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              required
            >
              <option value="">Select a slot</option>
              <option value="09:00-10:00">09:00-10:00</option>
              <option value="10:00-11:00">10:00-11:00</option>
              <option value="11:00-12:00">11:00-12:00</option>
              <option value="14:00-15:00">14:00-15:00</option>
              <option value="15:00-16:00">15:00-16:00</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit" className="button-primary">
              Confirm Booking
            </button>
            <button
              type="button"
              className="modal-close-button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ServiceProviderDetails() {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let providerDetails = null;
  Object.values(allProviders).some(providers => {
    providerDetails = providers.find(p => p.id === providerId);
    return providerDetails;
  });

  useEffect(() => {
    if (providerDetails && chartRef.current) {
      const distribution = providerDetails.ratingDistribution;
      const option = {
        title: {
          text: "Rating Distribution",
          left: "center",
          textStyle: { fontSize: 14 }
        },
        tooltip: { trigger: "item" },
        series: [{
          type: "pie",
          radius: "70%",
          data: Object.keys(distribution).map(key => ({
            value: distribution[key],
            name: key
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }]
      };
      const chart = echarts.init(chartRef.current);
      chart.setOption(option);
      const handleResize = () => chart.resize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [providerDetails]);

  if (!providerDetails) {
    return (
      <div className="provider-details-container">
        <p>Provider not found.</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="provider-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Providers
      </button>

      <div className="provider-details-wrapper">
        {/* Left Half: Basic Details */}
        <div className="left-column">
          <img
            src={providerDetails.image}
            alt={providerDetails.name}
            className="provider-image-small"
          />
          <div className="provider-info">
            <h2 className="provider-name">{providerDetails.name}</h2>
            <p className="provider-title">{providerDetails.title}</p>
            <p className="provider-basic-details">
              Rating: {providerDetails.rating} ({providerDetails.reviews} reviews)<br />
              Experience: {providerDetails.experience}<br />
              Hourly Rate: ${providerDetails.hourlyRate}/hour<br />
              Availability: {providerDetails.availability}
            </p>
            <p className="provider-description">
              {providerDetails.description}
            </p>
          </div>
        </div>

        {/* Right Half: Pie Chart and Book Now Button */}
        <div className="right-column">
          <div className="chart-container" ref={chartRef} />
          <div className="bookNow">
            <button onClick={() => setIsModalOpen(true)}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="client-reviews">
        <h3>Client Reviews</h3>
        {providerDetails.clientReviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <p className="review-client"><strong>{review.client}</strong></p>
            <p className="review-text">"{review.review}"</p>
            <p className="review-rating">Rating: {review.rating}</p>
          </div>
        ))}
      </div>

      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default ServiceProviderDetails;
