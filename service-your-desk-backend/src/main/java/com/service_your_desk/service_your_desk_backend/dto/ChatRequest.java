package com.service_your_desk.service_your_desk_backend.dto;

public class ChatRequest {
    private String text;

    // Constructor
    public ChatRequest() {}

    // Getter and Setter
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
