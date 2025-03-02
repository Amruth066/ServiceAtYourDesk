package com.service_your_desk.service_your_desk_backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chat_history")
public class ChatHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String userInput;
    
    @Column(nullable = false)
    private String botResponse;
}
