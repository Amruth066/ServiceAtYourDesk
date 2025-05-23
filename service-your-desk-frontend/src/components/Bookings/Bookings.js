import React, { useContext, useEffect, useState } from "react";
import "./Bookings.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/bookings")
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch bookings");
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

    const handleChatNow = async (booking) => {
        try {
            const providerResponse = await fetch(`http://localhost:8080/api/providers/${booking.providerId}`);
            if (!providerResponse.ok) throw new Error("Failed to fetch provider details");
    
            const providerData = await providerResponse.json();
            const providerName = providerData.name;

            console.log(providerData)
    
            const senderName = user.name
    
            const messagePayload = {
                sender: senderName,
                receiver: providerName,
                content: "Hi, I'd like to chat about the booking.",
                type: "text",
                timestamp: new Date().toISOString()
            };
    
            const chatResponse = await fetch("http://localhost:8080/chat/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messagePayload)
            });
    
            if (!chatResponse.ok) throw new Error("Failed to send chat message");
    
            const chatResult = await chatResponse.json();
            console.log("Message sent:", chatResult);
            alert("Chat initiated!");
    
        } catch (error) {
            console.error("Error in chat initiation:", error);
            alert("Could not start chat.");
        }
        navigate('/messages')
    };
    


    const closeModal = () => {
        setSelectedBooking(null);
        setRating(5);
        setReview("");
    };

    const handleSubmit = () => {
        if (!selectedBooking) return;
        setBookings(bookings.filter(b => b.bookingId !== selectedBooking.bookingId));
        closeModal();
    };

    if (loading) return <p>Loading bookings...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    const inProgressBookings = bookings.filter(booking => !booking.markAsDone);
    const doneBookings = bookings.filter(booking => booking.markAsDone === true);
    return (
        <div className="bookings-container">
            <h2>My Bookings</h2>

            <section>
                <h3>In Progress</h3>
                {inProgressBookings.length === 0 ? (
                    <p>No in-progress bookings found.</p>
                ) : (
                    <div className="booking-cards-wrapper">
                        {inProgressBookings.map(booking => (
                            <div key={booking.bookingId} className="booking-card">
                                <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                                <p><strong>Date:</strong> {booking.date}</p>
                                <p><strong>Slot:</strong> {booking.slot}</p>
                                <p><strong>Provider Id:</strong> {booking.providerId}</p>
                                <button
                                    className="chat-btn"
                                    onClick={() => handleChatNow(booking)}
                                >
                                    Chat Now
                                </button>

                            </div>
                        ))}
                    </div>
                )}
            </section>
            <div className="section-divider"><span>Completed Bookings</span></div>
            <section>
                <h3>Done</h3>
                {doneBookings.length === 0 ? (
                    <p>No completed bookings found.</p>
                ) : (
                    <div className="booking-cards-wrapper">
                        {doneBookings.map(booking => (
                            <div key={booking.bookingId} className="booking-card">
                                <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                                <p><strong>Date:</strong> {booking.date}</p>
                                <p><strong>Slot:</strong> {booking.slot}</p>
                                <p><strong>Provider Id:</strong> {booking.providerId}</p>
                                <button className="rate-btn" onClick={() => openModal(booking)}>
                                    Rate & Review
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {selectedBooking && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Rate & Review</h3>
                        <p><strong>Booking ID:</strong> {selectedBooking.bookingId}</p>

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
