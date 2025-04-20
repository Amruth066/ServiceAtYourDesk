package com.service_your_desk.service_your_desk_backend.controller;

import com.service_your_desk.service_your_desk_backend.model.ChatMessage;
import com.service_your_desk.service_your_desk_backend.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/chat")
@CrossOrigin("*")

public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    public ResponseEntity<ChatMessage> sendMessage(@RequestBody ChatMessage chatMessage) {
        if (chatMessage.getSender() == null || chatMessage.getReceiver() == null || chatMessage.getContent() == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(chatService.saveMessage(chatMessage));
    }

    @GetMapping("/history")
    public List<ChatMessage> getHistory(@RequestParam String sender, @RequestParam String receiver) {
        return chatService.getChatHistory(sender, receiver);
    }
    
    @GetMapping("/partners")
    public ResponseEntity<List<String>> getChatPartners(@RequestParam String sender) {
        return ResponseEntity.ok(chatService.getAllChatPartners(sender));
    }
}