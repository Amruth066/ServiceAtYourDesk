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

    public List<String> getAllServices() {
        return repository.findAll()
                .stream()
                .map(ServiceIssue::getServiceName)
                .distinct()
                .toList();
    }

    public List<ServiceIssue> getIssuesByService(String serviceName) {
        return repository.findByServiceName(serviceName);
    }
}

