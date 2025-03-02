package com.service_your_desk.service_your_desk_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "chat_history")
public class ChatHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="user_input")
    private String userInput;

    @Column(name="bot_response")
    private String botResponse;

    // Default constructor
    public ChatHistory() {
    }

    // Parameterized constructor
    public ChatHistory(Long id, String userInput, String botResponse) {
        this.id = id;
        this.userInput = userInput;
        this.botResponse = botResponse;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserInput() {
        return userInput;
    }

    public void setUserInput(String userInput) {
        this.userInput = userInput;
    }

    public String getBotResponse() {
        return botResponse;
    }

    public void setBotResponse(String botResponse) {
        this.botResponse = botResponse;
    }

    // toString method
    @Override
    public String toString() {
        return "ChatHistory{" +
                "id=" + id +
                ", userInput='" + userInput + '\'' +
                ", botResponse='" + botResponse + '\'' +
                '}';
    }
}
