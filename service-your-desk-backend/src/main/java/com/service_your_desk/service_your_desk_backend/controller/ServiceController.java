package com.service_your_desk.service_your_desk_backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.service_your_desk.service_your_desk_backend.model.ServiceEntity;
import com.service_your_desk.service_your_desk_backend.service.ServiceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*") 
public class ServiceController {

    @Autowired
    private ServiceService serviceService;
    
    @GetMapping
    public List<ServiceEntity> getAllServices() {
        return serviceService.getAllServices();
    }
    
    @GetMapping("/{id}")
    public ServiceEntity getServiceById(@PathVariable Integer id) {
        Optional<ServiceEntity> service = serviceService.getServiceById(id);
        return service.orElseThrow(() -> new RuntimeException("Service not found"));
    }
    
    @PostMapping
    public ServiceEntity createService(@RequestBody ServiceEntity service) {
        return serviceService.createService(service);
    }
    
    @PutMapping("/{id}")
    public ServiceEntity updateService(@PathVariable Integer id, @RequestBody ServiceEntity serviceDetails) {
        return serviceService.updateService(id, serviceDetails);
    }
    
    @DeleteMapping("/{id}")
    public void deleteService(@PathVariable Integer id) {
        serviceService.deleteService(id);
    }
}