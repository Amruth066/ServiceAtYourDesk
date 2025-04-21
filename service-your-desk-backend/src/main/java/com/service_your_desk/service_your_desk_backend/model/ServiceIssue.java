package com.service_your_desk.service_your_desk_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "service_issues")
public class ServiceIssue {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "service_id", nullable = false)
    private ServiceEntity service;

    @Column(name = "issue_name", nullable = false)
    private String issueName;

    // Default constructor
    public ServiceIssue() {}

    // Parameterized constructor
    public ServiceIssue(ServiceEntity service, String issueName) {
        this.service = service;
        this.issueName = issueName;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ServiceEntity getService() {
        return service;
    }

    public void setService(ServiceEntity service) {
        this.service = service;
    }

    public String getIssueName() {
        return issueName;
    }

    public void setIssueName(String issueName) {
        this.issueName = issueName;
    }

    public Long getServiceId() { 
        return service != null ? service.getServiceId() : null;
    }

    @Override
    public String toString() {
        return "ServiceIssue{" +
                "id=" + id +
                ", service=" + (service != null ? service.getName() : "null") +  
                ", issueName='" + issueName + '\'' +
                '}';
    }
}
