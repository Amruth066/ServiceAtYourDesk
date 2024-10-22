import React, { useState } from 'react';
import './ServiceProviderDetails.css';

const ServiceProviderDetails = ({ provider }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const slots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
  ];

  const handleSlotSelection = (e) => {
    setSelectedSlot(e.target.value);
  };

  const confirmBooking = () => {
    if (selectedSlot) {
      setBookingConfirmed(true);
      alert(`Booking confirmed for ${provider.name} at ${selectedSlot}`);
      window.location.reload()
      
    } else {
      alert('Please select a time slot');
    }
  };

  return (
    <>
    <div className="provider-details">
      <h2>Details for {provider.name}</h2>
      <div className="provider-info">
        <p><strong>Name:</strong> {provider.name}</p>
        <p><strong>Experience:</strong> {provider.experience} years</p>
        <p><strong>Specialization:</strong> {provider.specialization}</p>
        <p><strong>Ratings:</strong> {provider.rating} / 5</p>
      </div>
      <div className="previous-work">
        <h3>Previous Work:</h3>
        <ul>
          {provider.previousWork.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ul>
      </div>
      <div className="booking-section">
        <h3>Book a Slot</h3>
        <select value={selectedSlot} onChange={handleSlotSelection}>
          <option value="">Select a Time Slot</option>
          {slots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
        <button onClick={confirmBooking}>Confirm Booking</button>
      </div>
      {bookingConfirmed && (
        <div className="confirmation-message">
          <p>Booking confirmed for {selectedSlot}</p>
        </div>
      )}
    </div>

    </>
  );
};

export default ServiceProviderDetails;
