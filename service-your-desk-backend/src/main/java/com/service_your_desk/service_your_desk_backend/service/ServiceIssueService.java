package com.service_your_desk.service_your_desk_backend.service;

import org.springframework.stereotype.Service;
import com.service_your_desk.service_your_desk_backend.model.ServiceIssue;
import com.service_your_desk.service_your_desk_backend.repository.ServiceIssueRepository;

import java.util.List;

@Service
public class ServiceIssueService {

    private final ServiceIssueRepository repository;

    public ServiceIssueService(ServiceIssueRepository repository) {
        this.repository = repository;
    }

    // Get all service issues
    public List<ServiceIssue> getAllServicesIssues() {
        return repository.findAll();
    }

    // Get issues by service name
    public List<ServiceIssue> getIssuesByService(String serviceName) {
        return repository.findByService_Name(serviceName); // Corrected query
    }

    // Get details of an issue by name
    public ServiceIssue getIssueDetails(String issueName) {
        return repository.findByIssueName(issueName)
                .orElseThrow(() -> new RuntimeException("Issue not found: " + issueName));
    }
}
