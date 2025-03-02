package com.service_your_desk.service_your_desk_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.service_your_desk.service_your_desk_backend.model.ChatHistory;

import java.util.*;

@Repository
public interface ChatRepository extends JpaRepository<ChatHistory, Long> {
   Optional<ChatHistory> findTopByUserInputOrderByIdDesc(String userInput);
    
   List<ChatHistory> findByUserInput(String userInput);
}
