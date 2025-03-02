class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleBotResponse = (response) => {
      const botMessage = this.createChatBotMessage(response);
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  }
  
  export default ActionProvider;
  