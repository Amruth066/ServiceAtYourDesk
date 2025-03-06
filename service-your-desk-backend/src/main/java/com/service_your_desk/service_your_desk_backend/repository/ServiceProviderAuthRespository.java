package com.service_your_desk.service_your_desk_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.service_your_desk.service_your_desk_backend.model.ServiceProviderAuthEntity;

import java.util.Optional;

public interface ServiceProviderAuthRespository extends JpaRepository<ServiceProviderAuthEntity, Long> {
    Optional<ServiceProviderAuthEntity> findByEmail(String email);
}
