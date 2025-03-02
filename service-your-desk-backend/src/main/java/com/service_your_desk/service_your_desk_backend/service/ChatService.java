package com.service_your_desk.service_your_desk_backend.service;

import com.service_your_desk.service_your_desk_backend.model.ChatHistory;
import com.service_your_desk.service_your_desk_backend.repository.ChatRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ChatService {
    
    @Autowired
    private ChatRepository chatHistoryRepository;
    
    public String getChatResponse(String userInput) {
        Optional<ChatHistory> chatHistory = chatHistoryRepository.findTopByUserInputOrderByIdDesc(userInput);
        
        return chatHistory.map(ChatHistory::getBotResponse).orElse("No response found!");
    }
    public List<ChatHistory> getAllChatHistory() {
        return chatHistoryRepository.findAll();  // Assuming you are using JPA
    }
    

    public List<ChatHistory> getChatHistory(String userInput) {
        return chatHistoryRepository.findByUserInput(userInput);
    }

    public void saveChat(String userInput, String botResponse) {
        ChatHistory chatHistory = new ChatHistory();
        chatHistory.setUserInput(userInput);
        chatHistory.setBotResponse(botResponse);
        chatHistoryRepository.save(chatHistory);
    }
}
