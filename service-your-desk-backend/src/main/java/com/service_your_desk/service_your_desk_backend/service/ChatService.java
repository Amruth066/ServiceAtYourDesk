package com.service_your_desk.service_your_desk_backend.service;

import com.service_your_desk.service_your_desk_backend.model.ChatMessage;
import com.service_your_desk.service_your_desk_backend.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessage saveMessage(ChatMessage message) {
        message.setTimestamp(java.time.LocalDateTime.now());
        return chatMessageRepository.save(message);
    }

    public List<ChatMessage> getChatHistory(String sender, String receiver) {
        return chatMessageRepository.findBySenderAndReceiverOrReceiverAndSender(sender, receiver, sender, receiver);
    }
    
    public List<String> getAllChatPartners(String sender) {
        return chatMessageRepository.findAllChatPartners(sender);
    }

    public void deleteAllMessages() {
        chatMessageRepository.deleteAll();
    }
    
}
