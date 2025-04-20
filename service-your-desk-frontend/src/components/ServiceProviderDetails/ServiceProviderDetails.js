import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as echarts from "echarts";
import "./ServiceProviderDetails.css";
import imageUrl from "../../assets/images/worker.jpg";

function BookingModal({ onClose, providerId }) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    if (!date || !slot) {
      alert("Please select both date and time slot.");
      return;
    }
  
    const formattedDate = new Date(date).toISOString().split('T')[0];
    setIsSubmitting(true);
  
    const bookingData = {
      providerId: parseInt(providerId),
      date: formattedDate,
      slot,
      userId: 1, 
    };
  
    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      console.log("Booking Data:", bookingData);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Booking failed:", errorText);
        throw new Error("Booking failed");
      }
  
      alert(`Booked on ${formattedDate} at ${slot}`);
      onClose(); // close modal on success
    } catch (err) {
      alert("Booking failed. Try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="modal-content-large">
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label>Time Slot:
            <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
              <option value="">Select a slot</option>
              <option value="09:00-10:00">09:00-10:00</option>
              <option value="10:00-11:00">10:00-11:00</option>
              <option value="11:00-12:00">11:00-12:00</option>
              <option value="14:00-15:00">14:00-15:00</option>
              <option value="15:00-16:00">15:00-16:00</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Confirm"}
            </button>
            <button type="button" onClick={onClose}>Cancel</button>
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
  const [isModalOpen, setIsModalOpen] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/providers/${providerId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch provider");
        return res.json();
      })
      .then((data) => {
        setProvider(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [providerId]);

  useEffect(() => {
    if (provider && chartRef.current) {
      const ratings = ["5 stars", "4 stars", "3 stars", "2 stars", "1 star"];
      const colors = ['#4caf50', '#2196f3', '#ff9800', '#f44336', '#9c27b0'];
      const dataForChart = ratings.map((r, i) => ({
        value: provider.ratingDistribution?.[r] || 0,
        name: r,
        itemStyle: { color: colors[i] }
      }));

      const chart = echarts.init(chartRef.current);
      chart.setOption({
        title: { text: "Rating Distribution", left: "center", textStyle: { fontSize: 14 } },
        tooltip: { trigger: "item" },
        series: [{
          type: "pie",
          radius: "70%",
          data: dataForChart,
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)" }
          }
        }]
      });
      const resize = () => chart.resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
  }, [provider]);

  if (loading) return <p>Loading provider details...</p>;
  if (error || !provider) return <p>Error: {error}</p>;

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content-large">
            <button className="close-button" onClick={() => navigate(-1)}>×</button>
            <div className="provider-details-wrapper">
              <div className="left-column">
                <img src={imageUrl} alt={provider.name} className="provider-image-small" />
                <div className="provider-info">
                  <h2 className="provider-name">{provider.name}</h2>
                  <p className="provider-title">{provider.title}</p>
                  <p className="provider-basic-details">
                    Rating: {provider.rating} ({provider.reviews} reviews)<br />
                    Experience: {provider.experience}<br />
                    Hourly Rate: ${provider.hourlyRate}/hr<br />
                    Availability: {provider.availability}
                  </p>
                  <p className="provider-description">{provider.description}</p>
                </div>
              </div>
              <div className="right-column">
                <div ref={chartRef} className="chart-container" />
                <div className="bookNow">
                  <button onClick={() => setIsModalOpen(false)}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="client-reviews">
              <h3>Client Reviews</h3>
              {provider.clientReviews?.length > 0 ? (
                provider.clientReviews.map((r, i) => (
                  <div className="review-card" key={i}>
                    <p className="review-client"><strong>{r.client}</strong></p>
                    <p className="review-text">"{r.review}"</p>
                    <p className="review-rating">Rating: {r.rating}</p>
                  </div>
                ))
              ) : <p>No reviews available.</p>}
            </div>
          </div>
        </div>
      )}
      {!isModalOpen && (
        <BookingModal
          onClose={() => setIsModalOpen(true)}
          providerId={providerId}
        />
      )}
    </>
  );
}

export default ServiceProviderDetails;
