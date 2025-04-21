package com.service_your_desk.service_your_desk_backend.controller;

import com.service_your_desk.service_your_desk_backend.DTO.ServiceWithProvidersDTO;
import com.service_your_desk.service_your_desk_backend.model.ProviderEntity;
import com.service_your_desk.service_your_desk_backend.service.ProviderService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/providers")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    @GetMapping("/service/{serviceId}")
    public List<ProviderEntity> getProvidersByServiceId(@PathVariable Long serviceId) {
        return providerService.getProvidersByServiceId(serviceId);
    }

    @GetMapping("/services-with-providers")
    public Map<String, Object> getServicesWithProviders() {
        List<ServiceWithProvidersDTO> data = providerService.getServicesWithProviders();
        Map<String, Object> response = new HashMap<>();
        response.put("services", data);
        return response;
    }


    @GetMapping
    public List<ProviderEntity> getAllProviders() {
        return providerService.getAllProviders();
    }

    @GetMapping("/top-rated")
    public List<ProviderEntity> getTopRatedProviders() {
        return providerService.getTopRatedProviders();
    }

    // GET provider by ID
    @GetMapping("/{id}")
    public ProviderEntity getProviderById(@PathVariable Integer id) {
        return providerService.getProviderById(id)
                .orElseThrow(() -> new RuntimeException("Provider not found"));
    }

    // POST: Create a new provider
    @PostMapping
    public ProviderEntity createProvider(@RequestBody ProviderEntity provider) {
        return providerService.createProvider(provider);
    }

    // PUT: Update an existing provider
    @PutMapping("/{id}")
    public ProviderEntity updateProvider(@PathVariable Integer id, @RequestBody ProviderEntity provider) {
        return providerService.updateProvider(id, provider);
    }

    // DELETE: Remove a provider
    @DeleteMapping("/{id}")
    public void deleteProvider(@PathVariable Integer id) {
        providerService.deleteProvider(id);
    }
}