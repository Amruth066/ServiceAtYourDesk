import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config"
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider";
import "./Chatbot.css"; // Import styles

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-btn" onClick={() => setShowChat(!showChat)}>
        {showChat ? "Close Chat" : "Chat with Us"}
      </button>

      {/* Chatbot UI */}
      {showChat && (
        <div className="chatbot-container">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
