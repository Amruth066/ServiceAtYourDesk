package com.service_your_desk.service_your_desk_backend.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service_your_desk.service_your_desk_backend.DTO.ProviderSummaryDTO;
import com.service_your_desk.service_your_desk_backend.DTO.ServiceWithProvidersDTO;
import com.service_your_desk.service_your_desk_backend.model.ProviderEntity;
import com.service_your_desk.service_your_desk_backend.model.ServiceEntity;
import com.service_your_desk.service_your_desk_backend.repository.ProviderRepository;
import com.service_your_desk.service_your_desk_backend.repository.ServiceRepository;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    public List<ServiceWithProvidersDTO> getServicesWithProviders() {
        List<ServiceEntity> services = serviceRepository.findAll();
        List<ServiceWithProvidersDTO> result = new ArrayList<>();

        for (ServiceEntity service : services) {
            List<ProviderEntity> providers = providerRepository.findByServiceId(service.getServiceId());
            List<ProviderSummaryDTO> providerDTOs = providers.stream().map(p -> new ProviderSummaryDTO(
                    p.getProviderId(),
                    p.getName(),
                    p.getRating(),
                    p.getExperience(),
                    p.getLocation())).toList();

            result.add(new ServiceWithProvidersDTO(service.getServiceId(), service.getName(), providerDTOs));
        }

        return result;
    }

    public List<ProviderEntity> getProvidersByServiceId(Long serviceId) {
        return providerRepository.findByServiceId(serviceId);
    }

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
