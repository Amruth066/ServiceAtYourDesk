package com.service_your_desk.service_your_desk_backend.DTO;

public class ProviderSummaryDTO {
    private Long providerId;
    private String name;
    private Double rating;
    private String experience;
    private String location;

    // Default constructor
    public ProviderSummaryDTO() {
    }

    // All-args constructor
    public ProviderSummaryDTO(Long providerId, String name, Double rating, String experience, String location) {
        this.providerId = providerId;
        this.name = name;
        this.rating = rating;
        this.experience = experience;
        this.location = location;
    }

    // Getters and Setters
    public Long getProviderId() {
        return providerId;
    }

    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
