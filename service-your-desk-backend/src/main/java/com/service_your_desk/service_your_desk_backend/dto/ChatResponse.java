package com.service_your_desk.service_your_desk_backend.dto;
public class ChatResponse {
    private String reply;

    // Constructor
    public ChatResponse(String reply) {
        this.reply = reply;
    }

    // Getter and Setter
    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }
}