package com.workatyourwill.service_provider_application.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    @GetMapping
    public String sayHello(){
        return "hello World";
    }
    
}
