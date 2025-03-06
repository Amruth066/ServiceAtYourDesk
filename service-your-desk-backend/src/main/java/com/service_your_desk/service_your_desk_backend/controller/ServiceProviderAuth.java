package com.service_your_desk.service_your_desk_backend.controller;

import com.service_your_desk.service_your_desk_backend.model.ServiceProviderAuthEntity;
import com.service_your_desk.service_your_desk_backend.repository.ServiceProviderAuthRespository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/serviceProviderAuth")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access backend
public class ServiceProviderAuth {
    private final ServiceProviderAuthRespository serviceProviderAuthRespository;

    public ServiceProviderAuth(ServiceProviderAuthRespository serviceProviderAuthRespository) {
        this.serviceProviderAuthRespository = serviceProviderAuthRespository;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody ServiceProviderAuthEntity user) {
        if (serviceProviderAuthRespository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already in use"));
        }

        user.setPassword(user.getPassword()); // Ideally, hash passwords
        serviceProviderAuthRespository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        Optional<ServiceProviderAuthEntity> userOpt = serviceProviderAuthRespository.findByEmail(loginData.get("email"));

        if (userOpt.isEmpty() || !userOpt.get().getPassword().equals(loginData.get("password"))) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials"));
        }

        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("email", userOpt.get().getEmail());
        response.put("name", userOpt.get().getName());

        return ResponseEntity.ok(response);
    }
}