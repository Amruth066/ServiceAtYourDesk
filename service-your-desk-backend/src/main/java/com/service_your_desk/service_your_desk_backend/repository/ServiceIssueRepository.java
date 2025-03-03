package com.service_your_desk.service_your_desk_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.service_your_desk.service_your_desk_backend.model.ServiceIssue;

import java.util.List;
import java.util.Optional;

public interface ServiceIssueRepository extends JpaRepository<ServiceIssue, Long> {
    List<ServiceIssue> findByService_Name(String serviceName); // Fixed service entity mapping
    Optional<ServiceIssue> findByIssueName(String issueName);
}
