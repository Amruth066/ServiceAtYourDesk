import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as echarts from "echarts";
import "./ServiceProviderDetails.css";
function BookingModal({ onClose, providerId }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

  const handleSubmit = async (e) => {

    const userId = 1

    e.preventDefault();

    

    setIsSubmitting(true);

    const bookingData = {
      providerId,
      date,
      slot,
      userId,
    };


    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      alert(`Booked on ${date} at ${slot}`);
      onClose();
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    console.log(bookingData)
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
            <button type="submit" className="button-primary" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Confirm Booking"}
            </button>
            <button type="button" className="modal-close-button" onClick={onClose}>
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
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";


  

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`${API_URL}/providers/${providerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching provider details");
        }
        return response.json();
      })
      .then((data) => {
        setProvider(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [providerId, API_URL]);

  useEffect(() => {
    if (provider && chartRef.current) {
      // Use the fixed set of keys and colors
      const ratings = ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"];
      const colors = ['#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0'];
      const distribution = provider.ratingDistribution || {};
      const dataForChart = ratings.map((rating, index) => ({
        value: distribution[rating] || 0,
        name: rating,
        itemStyle: { color: colors[index] }
      }));
  
      const option = {
        title: {
          text: "Rating Distribution",
          left: "center",
          textStyle: { fontSize: 14 }
        },
        tooltip: { trigger: "item" },
        series: [
          {
            type: "pie",
            radius: "70%",
            data: dataForChart,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
  
      const chart = echarts.init(chartRef.current);
      chart.setOption(option);
      const handleResize = () => chart.resize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [provider]);
  

  if (loading) return <p>Loading provider details...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!provider) return <p>Provider not found.</p>;

  return (
    <div className="provider-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Providers
      </button>
      <div className="provider-details-wrapper">
        {/* Left Column: Basic Details */}
        <div className="left-column">
          <img
            src={provider.image}
            alt={provider.name}
            className="provider-image-small"
          />
          <div className="provider-info">
            <h2 className="provider-name">{provider.name}</h2>
            <p className="provider-title">{provider.title}</p>
            <p className="provider-basic-details">
              Rating: {provider.rating} ({provider.reviews} reviews)
              <br />
              Experience: {provider.experience}
              <br />
              Hourly Rate: ${provider.hourlyRate}/hour
              <br />
              Availability: {provider.availability}
            </p>
            <p className="provider-description">{provider.description}</p>
          </div>
        </div>
        {/* Right Column: Pie Chart and Book Now Button */}
        <div className="right-column">
          <div className="chart-container" ref={chartRef} />
          <div className="bookNow">
            <button onClick={() => setIsModalOpen(true)}>Book Now</button>
          </div>
        </div>
      </div>
      {/* Client Reviews Section */}
      <div className="client-reviews">
        <h3>Client Reviews</h3>
        {provider.clientReviews && provider.clientReviews.length > 0 ? (
          provider.clientReviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <p className="review-client">
                <strong>{review.client}</strong>
              </p>
              <p className="review-text">"{review.review}"</p>
              <p className="review-rating">Rating: {review.rating}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} providerId={providerId} />}
    </div>
  );
}

export default ServiceProviderDetails;
