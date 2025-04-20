package com.service_your_desk.service_your_desk_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.service_your_desk.service_your_desk_backend.model.BookingEntity;
import com.service_your_desk.service_your_desk_backend.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<BookingEntity> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public BookingEntity getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @PostMapping
    public BookingEntity createBooking(@RequestBody BookingEntity booking) {
        return bookingService.createBooking(booking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
    }

    @DeleteMapping
    public void deleteAllBookings() {
        bookingService.deleteAllBookings();
    }

}
