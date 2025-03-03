import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
  botName: "HelpBot",
  initialMessages: [createChatBotMessage("Hello! At which service do you have an issue?")],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
