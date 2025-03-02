package com.service_your_desk.service_your_desk_backend.controller;
import org.springframework.web.bind.annotation.*;

import com.service_your_desk.service_your_desk_backend.model.ServiceIssue;
import com.service_your_desk.service_your_desk_backend.service.ServiceIssueService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Enable CORS for frontend access
public class ServiceIssueController {

    private final ServiceIssueService service;

    public ServiceIssueController(ServiceIssueService service) {
        this.service = service;
    }

    @GetMapping("/services")
    public List<String> getAllServices() {
        return service.getAllServices();
    }

    @GetMapping("/issues/{serviceName}")
    public List<ServiceIssue> getIssuesByService(@PathVariable String serviceName) {
        return service.getIssuesByService(serviceName);
    }
}
