package com.service_your_desk.service_your_desk_backend.service;

import org.springframework.stereotype.Service;
import com.service_your_desk.service_your_desk_backend.model.ServiceIssue;
import com.service_your_desk.service_your_desk_backend.repository.ServiceIssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceIssueService {

    private final ServiceIssueRepository repository;

    public ServiceIssueService(ServiceIssueRepository repository) {
        this.repository = repository;
    }

    // Get all unique service names from ServiceEntity
    public List<ServiceIssue> getAllServicesIssues() {
        return repository.findAll();
    }
    // Get issues by service name
    public List<ServiceIssue> getIssuesByService(String serviceName) {
        return repository.findAll()
                .stream()
                .filter(issue -> issue.getService().getName().equalsIgnoreCase(serviceName))
                .collect(Collectors.toList());
    }
}
