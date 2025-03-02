import axios from "axios";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  async parse(message) {
    await this.sendMessageToBackend(message);
  }

  sendMessageToBackend = async (userMessage) => {
    try {
      console.log("Sending user input:", userMessage);

      const response = await axios.get(`http://localhost:8080/api/chat/history`, {
        params: { userInput: userMessage },
      });

      console.log("API Response:", response.data);

      if (response.data.length > 0) {
        this.actionProvider.handleBotResponse(response.data[0].botResponse);
      } else {
        this.actionProvider.handleBotResponse("I am not sure how to respond to that.");
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      this.actionProvider.handleBotResponse("Oops! Something went wrong.");
    }
  };
}

export default MessageParser;
