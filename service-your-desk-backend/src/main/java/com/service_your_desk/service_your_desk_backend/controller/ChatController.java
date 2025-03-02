package com.service_your_desk.service_your_desk_backend.controller;

import com.service_your_desk.service_your_desk_backend.model.ChatHistory;
import com.service_your_desk.service_your_desk_backend.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")  
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    public String chatResponse(@RequestParam String userInput) {
        return chatService.getChatResponse(userInput);
    }

    @GetMapping("/history")
    public List<ChatHistory> getChatHistory(@RequestParam String userInput) {
        return chatService.getChatHistory(userInput);
    }

    @GetMapping("/all")
    public List<ChatHistory> getAllChatHistory(){
        return chatService.getAllChatHistory();
    }
}
