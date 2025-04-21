package com.service_your_desk.service_your_desk_backend.DTO;

import java.util.List;

public class ServiceWithProvidersDTO {
    private Long serviceId;
    private String serviceName;
    private List<ProviderSummaryDTO> providers;

    // Default constructor
    public ServiceWithProvidersDTO() {
    }

    // Constructor with parameters
    public ServiceWithProvidersDTO(Long serviceId, String serviceName, List<ProviderSummaryDTO> providers) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
        this.providers = providers;
    }

    // Getter and Setter for serviceId
    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    // Getter and Setter for serviceName
    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    // Getter and Setter for providers
    public List<ProviderSummaryDTO> getProviders() {
        return providers;
    }

    public void setProviders(List<ProviderSummaryDTO> providers) {
        this.providers = providers;
    }
}
