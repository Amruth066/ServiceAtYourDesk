package com.service_your_desk.service_your_desk_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service_your_desk.service_your_desk_backend.model.BookingEntity;
import com.service_your_desk.service_your_desk_backend.model.UserEntity;
import com.service_your_desk.service_your_desk_backend.repository.BookigRespository;
import com.service_your_desk.service_your_desk_backend.repository.UserRepository;

@Service
public class BookingService {

    @Autowired
    private BookigRespository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public List<BookingEntity> getAllBookings(){
        return bookingRepository.findAll();
    }

    public Optional<BookingEntity> getBookingById(Long id){
        return bookingRepository.findById(id);
    }

    public BookingEntity createBooking(BookingEntity bookingEntity){
        BookingEntity savedBooking = bookingRepository.save(bookingEntity);

        Optional<UserEntity> userOpt = userRepository.findById(bookingEntity.getUserId());
        if (userOpt.isPresent()) {
            UserEntity user = userOpt.get();
            String bookingDetails = "Date: " + bookingEntity.getDate() + "\nSlot: " + bookingEntity.getSlot();
            emailService.sendBookingConfirmation(user.getEmail(), user.getName(), bookingDetails);
        }

        return savedBooking;
    }

    public void deleteBooking(Long id){
        bookingRepository.deleteById(id);
    }
    
}
