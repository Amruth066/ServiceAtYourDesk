package com.service_your_desk.service_your_desk_backend.controller;

import com.service_your_desk.service_your_desk_backend.model.UserEntity;
import com.service_your_desk.service_your_desk_backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to access backend
public class AuthController {
    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody UserEntity user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email already in use"));
        }

        user.setPassword(user.getPassword()); // Ideally, hash passwords
        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        Optional<UserEntity> userOpt = userRepository.findByEmail(loginData.get("email"));

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
