import React, { useEffect, useState } from "react";
import "./Bookings.css"; 

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/bookings") 
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch bookings");
                }
                return response.json();
            })
            .then(data => {
                setBookings(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const openModal = (booking) => {
        setSelectedBooking(booking);
    };

    const closeModal = () => {
        setSelectedBooking(null);
        setRating(5);
        setReview("");
    };

    const handleSubmit = () => {
        if (!selectedBooking) return;

        // Simulate review submission by removing the booking from the table
        setBookings(bookings.filter(b => b.bookingId !== selectedBooking.bookingId));
        closeModal();
    };

    if (loading) return <p>Loading bookings...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <div className="bookings-container">
            <h2>Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Provider ID</th>
                            <th>Date</th>
                            <th>Slot</th>
                            <th>User Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking.bookingId} onClick={() => openModal(booking)} style={{ cursor: "pointer" }}>
                                <td>{booking.bookingId}</td>
                                <td>{booking.providerId}</td>
                                <td>{booking.date}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Modal */}
            {selectedBooking && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Rate & Review</h3>
                        <p><strong>Booking ID:</strong> {selectedBooking.bookingId}</p>
                        <p><strong>Provider ID:</strong> {selectedBooking.providerId}</p>

                        <label>Rating:</label>
                        <select value={rating} onChange={(e) => setRating(e.target.value)}>
                            {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num} ⭐</option>
                            ))}
                        </select>

                        <label>Review:</label>
                        <textarea 
                            value={review} 
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Write your review here..."
                        />

                        <div className="modal-buttons">
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={closeModal} className="close-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bookings;
