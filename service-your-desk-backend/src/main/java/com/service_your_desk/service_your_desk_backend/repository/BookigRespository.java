package com.service_your_desk.service_your_desk_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.service_your_desk.service_your_desk_backend.model.BookingEntity;

public interface BookigRespository extends JpaRepository<BookingEntity, Long> {
  
} 