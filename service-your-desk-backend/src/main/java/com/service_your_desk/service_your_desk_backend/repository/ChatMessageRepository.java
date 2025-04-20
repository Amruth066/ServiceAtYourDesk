package com.service_your_desk.service_your_desk_backend.repository;

import com.service_your_desk.service_your_desk_backend.model.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findBySenderAndReceiverOrReceiverAndSender(String sender, String receiver, String receiver2, String sender2);

    @Query("SELECT DISTINCT CASE WHEN c.sender = :sender THEN c.receiver ELSE c.sender END " +
           "FROM ChatMessage c WHERE c.sender = :sender OR c.receiver = :sender")
    List<String> findAllChatPartners(@Param("sender") String sender);
}
