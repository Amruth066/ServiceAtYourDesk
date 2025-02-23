package com.service_your_desk.service_your_desk_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "providers")
public class ProviderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer providerId;

    @Column(name="service_id")
    private Integer serviceId;

     @Column(nullable = false, length = 100)
    private String name;
    
    @Column(length = 100)
    private String title;
    
    private Double rating;
    
    @Column(name = "review_count")
    private Integer reviewCount;
    
    @Column(length = 100)
    private String experience;
    
    @Column(name = "hourly_rate")
    private Double hourlyRate;
    
    @Column(length = 50)
    private String availability;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "previous_work", columnDefinition = "TEXT")
    private String previousWork;

    @Column(name = "rating_distribution", columnDefinition = "TEXT")
    private String ratingDistribution;


    public ProviderEntity() {
    }


    public Integer getProviderId() {
        return providerId;
    }

    public void setProviderId(Integer providerId) {
        this.providerId = providerId;
    }

    public Integer getServiceId() {
        return serviceId;
    }

    public void setServiceId(Integer serviceId) {
        this.serviceId = serviceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getReviewCount() {
        return reviewCount;
    }

    public void setReviewCount(Integer reviewCount) {
        this.reviewCount = reviewCount;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public Double getHourlyRate() {
        return hourlyRate;
    }

    public void setHourlyRate(Double hourlyRate) {
        this.hourlyRate = hourlyRate;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPreviousWork() {
        return previousWork;
    }

    public void setPreviousWork(String previousWork) {
        this.previousWork = previousWork;
    }

    public String getRatingDistribution() {
        return ratingDistribution;
    }

    public void setRatingDistribution(String ratingDistribution) {
        this.ratingDistribution = ratingDistribution;
    }

}
