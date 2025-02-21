package com.service_your_desk.service_your_desk_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service_your_desk.service_your_desk_backend.model.ServiceEntity;
import com.service_your_desk.service_your_desk_backend.repository.ServiceRepository;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    public List<ServiceEntity> getAllServices(){
        return serviceRepository.findAll();
    }

    public Optional<ServiceEntity> getServiceById(Integer id) {
        return serviceRepository.findById(id);   
    }

    public ServiceEntity createService(ServiceEntity service) {
        return serviceRepository.save(service);
    }

    public ServiceEntity updateService(Integer id, ServiceEntity serviceDetails) {
        ServiceEntity service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Service not found"));
        service.setName(serviceDetails.getName());
        service.setDescription(serviceDetails.getDescription());
        service.setBasePrice(serviceDetails.getBasePrice());
        return serviceRepository.save(service);
    }
    
    public void deleteService(Integer id) {
        serviceRepository.deleteById(id);
    }


    
}
