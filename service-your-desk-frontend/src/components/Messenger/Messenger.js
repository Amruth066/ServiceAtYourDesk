import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Messenger.css";
import { UserContext } from "../../context/UserContext";

function Messenger() {
  const [partners, setPartners] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);
  const currentUser = user?.name || "you";

  console.log(currentUser)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const partnerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" },
    tap: { scale: 0.95 },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchChatPartners = async () => {
      try {
        const response = await axios.get("http://localhost:8080/chat/partners", {
          params: { sender: currentUser }
        });
        setPartners(response.data);
      } catch (error) {
        console.error("Failed to fetch chat partners:", error);
      }
    };

    fetchChatPartners();
  }, [currentUser]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedReceiver) return;
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8080/chat/history", {
          params: {
            sender: currentUser,
            receiver: selectedReceiver
          }
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [selectedReceiver, currentUser]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await axios.post("http://localhost:8080/chat/send", {
        sender: currentUser,
        receiver: selectedReceiver,
        content: newMessage,
        type: "CHAT"
      });

      setNewMessage("");
      const updatedMessages = await axios.get("http://localhost:8080/chat/history", {
        params: { sender: currentUser, receiver: selectedReceiver }
      });
      setMessages(updatedMessages.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="messenger-container">
      <motion.div
        className="receiver-list-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your Chats
        </motion.h2>

        {partners.length === 0 ? (
          <motion.p
            className="no-chats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No chats found
          </motion.p>
        ) : (
          partners.map((partner, index) => (
            <motion.div
              key={index}
              className="chat-partner"
              onClick={() => setSelectedReceiver(partner)}
              variants={partnerVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {partner}
              <motion.div
                className="online-indicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          ))
        )}
      </motion.div>

      {selectedReceiver && (
        <motion.div
          className="chat-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="chat-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="chat-header">
              <h3>Chat with {selectedReceiver}</h3>
              <motion.button
                className="close-btn"
                onClick={() => {
                  setSelectedReceiver(null);
                  setMessages([]);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
            </div>

            <div className="chat-body">
              {loading ? (
                <motion.div
                  className="loading-messages"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Loading messages...
                </motion.div>
              ) : (
                <motion.div
                  className="messages-container"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.chatMessageId}
                      className={`message ${message.sender === currentUser ? "sent" : "received"}`}
                      variants={messageVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <strong>You:</strong> {message.content}
                      <div className="message-timestamp">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="chat-footer">
              <motion.input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(e)}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="send-btn"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Messenger;