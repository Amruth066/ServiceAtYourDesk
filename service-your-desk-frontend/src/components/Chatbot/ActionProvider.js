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

  handleIssueSelection = async (issueName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/service-issues/issue-detail/${encodeURIComponent(issueName)}`);
      if (!response.ok) throw new Error("Issue not found");

      const issueData = await response.json();
      const serviceId = issueData.service.serviceId;

      if (serviceId) {
        // Navigate to service provider page
        window.location.href = `/service/${serviceId}/${issueName}`;
      } else {
        this.handleBotResponse("Service ID not found. Please try another issue.");
      }
    } catch (error) {
      console.error("Error fetching issue details:", error);
      this.handleBotResponse("No issues found for this service. Please try another service.");
    }
  };
}

export default ActionProvider;
