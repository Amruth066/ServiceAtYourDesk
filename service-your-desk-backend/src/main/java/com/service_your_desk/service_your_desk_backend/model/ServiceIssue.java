package com.service_your_desk.service_your_desk_backend.model;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "service_issues")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceIssue {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String serviceName;
    
    private String issueName;
}
