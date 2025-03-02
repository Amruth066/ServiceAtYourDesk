import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
  botName: "HelpBot",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
