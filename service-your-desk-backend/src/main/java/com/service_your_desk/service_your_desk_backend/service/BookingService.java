package com.service_your_desk.service_your_desk_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service_your_desk.service_your_desk_backend.model.BookingEntity;
import com.service_your_desk.service_your_desk_backend.repository.BookigRespository;

@Service
public class BookingService {

    @Autowired
    private BookigRespository bookingRepository;

    public List<BookingEntity> getAllBookings(){
        return bookingRepository.findAll();
    }

    public Optional<BookingEntity> getBookingById(Long id){
        return bookingRepository.findById(id);
    }

    public BookingEntity createBooking(BookingEntity bookingEntity){
        return bookingRepository.save(bookingEntity);
    }

    public void deleteBooking(Long id){
        bookingRepository.deleteById(id);
    }
    
}
