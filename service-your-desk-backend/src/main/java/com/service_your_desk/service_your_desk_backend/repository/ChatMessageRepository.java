package com.service_your_desk.service_your_desk_backend.repository;

import com.service_your_desk.service_your_desk_backend.model.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findBySenderAndReceiverOrReceiverAndSender(String sender, String receiver, String receiver2, String sender2);
}