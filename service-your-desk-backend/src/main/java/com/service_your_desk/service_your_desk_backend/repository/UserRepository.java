package com.service_your_desk.service_your_desk_backend.repository;

import com.service_your_desk.service_your_desk_backend.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}
