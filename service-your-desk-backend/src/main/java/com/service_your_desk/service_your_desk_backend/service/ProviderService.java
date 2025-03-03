package com.service_your_desk.service_your_desk_backend.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service_your_desk.service_your_desk_backend.model.ProviderEntity;
import com.service_your_desk.service_your_desk_backend.repository.ProviderRepository;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    public List<ProviderEntity> getAllProviders() {
        return providerRepository.findAll();
    }

    public List<ProviderEntity> getTopRatedProviders() {
        return providerRepository.findByRatingGreaterThan(4.5);
    }

    public Optional<ProviderEntity> getProviderById(Integer id) {
        return providerRepository.findById(id);
    }

    public ProviderEntity createProvider(ProviderEntity provider) {
        return providerRepository.save(provider);
    }

    public ProviderEntity updateProvider(Integer id, ProviderEntity updatedProvider) {
        ProviderEntity provider = providerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Provider not found"));
        provider.setServiceId(updatedProvider.getServiceId());
        provider.setName(updatedProvider.getName());
        provider.setTitle(updatedProvider.getTitle());
        provider.setRating(updatedProvider.getRating());
        provider.setReviewCount(updatedProvider.getReviewCount());
        provider.setExperience(updatedProvider.getExperience());
        provider.setHourlyRate(updatedProvider.getHourlyRate());
        provider.setAvailability(updatedProvider.getAvailability());
        provider.setDescription(updatedProvider.getDescription());
        provider.setPreviousWork(updatedProvider.getPreviousWork());
        provider.setRatingDistribution(updatedProvider.getRatingDistribution());
        return providerRepository.save(provider);
    }

    public void deleteProvider(Integer id) {
        providerRepository.deleteById(id);
    }
}
