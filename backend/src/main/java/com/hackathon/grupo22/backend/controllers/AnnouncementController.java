package com.hackathon.grupo22.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AnnouncementController {

    @GetMapping("/announcements")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
}