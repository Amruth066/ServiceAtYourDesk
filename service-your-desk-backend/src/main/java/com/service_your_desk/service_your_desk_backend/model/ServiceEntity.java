package com.service_your_desk.service_your_desk_backend.model;

import jakarta.persistence.*;
@Entity
@Table(name = "services")
public class ServiceEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceId;
    
    @Column(nullable = false, length = 100)
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    private Double basePrice;

    public ServiceEntity() {}

    public ServiceEntity(String name, String description, Double basePrice) {
        this.name = name;
        this.description = description;
        this.basePrice = basePrice;
    }

    public Long getServiceId() {
        return serviceId;
    }
    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Double getBasePrice() {
        return basePrice;
    }
    public void setBasePrice(Double basePrice) {
        this.basePrice = basePrice;
    }
}