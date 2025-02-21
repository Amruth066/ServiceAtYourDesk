package com.service_your_desk.service_your_desk_backend.controller;


import com.service_your_desk.service_your_desk_backend.model.ProviderEntity;
import com.service_your_desk.service_your_desk_backend.service.ProviderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/providers")
@CrossOrigin(origins = "*")  
public class ProviderController {

    @Autowired
    private ProviderService providerService;
    
    // GET all providers
    @GetMapping
    public List<ProviderEntity> getAllProviders() {
        return providerService.getAllProviders();
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