package com.service_your_desk.service_your_desk_backend.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class BookingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "booking_id")
    private Long bookingId;

    @Column(name = "provider_id", nullable = false)
    private Long providerId;

    @Column(name = "date", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @Column(name = "slot", nullable = false, length = 20)
    private String slot;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "mark_as_done", nullable = false)
    private boolean markAsDone = false;  

    public BookingEntity() {}

    public BookingEntity(Long providerId, LocalDate date, String slot, Long userId) {
        this.providerId = providerId;
        this.date = date;
        this.slot = slot;
        this.userId = userId;
    }

    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public Long getProviderId() { return providerId; }
    public void setProviderId(Long providerId) { this.providerId = providerId; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getSlot() { return slot; }
    public void setSlot(String slot) { this.slot = slot; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public boolean isMarkAsDone() { return markAsDone; }  
    public void setMarkAsDone(boolean markAsDone) { this.markAsDone = markAsDone; }  
}
