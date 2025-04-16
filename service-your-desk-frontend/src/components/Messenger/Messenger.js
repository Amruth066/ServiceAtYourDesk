import React, { useState } from "react";
import { RiMessage3Line } from "react-icons/ri";
import "./Messenger.css";

function Messenger() {
  // State to toggle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button id="navMessageBtn" className="messenger-button" onClick={openModal}>
        <RiMessage3Line size={24} className="messenger-icon" />
        <span className="notification-badge">2</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="chat-modal-overlay">
          <div className="chat-modal">
            <div className="chat-header">
              <h3>Messages</h3>
              <button className="close-btn" onClick={closeModal}>X</button>
            </div>
            <div className="chat-body">
              <div className="message">
                <strong>John:</strong> Hey, how are you?
              </div>
              <div className="message">
                <strong>You:</strong> I'm doing well, thanks! How about you?
              </div>
              <div className="message">
                <strong>John:</strong> All good here! Want to catch up later?
              </div>
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Type a message..." />
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Messenger;
