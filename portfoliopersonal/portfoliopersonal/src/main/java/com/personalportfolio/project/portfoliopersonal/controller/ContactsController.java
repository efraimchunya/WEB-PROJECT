package com.personalportfolio.project.portfoliopersonal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personalportfolio.project.portfoliopersonal.model.Contacts;
import com.personalportfolio.project.portfoliopersonal.service.ContactsService;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactsController {

    @Autowired
    private ContactsService contactService;

    @GetMapping
    public List<Contacts> getAllContacts() {
        return contactService.getAllContacts();
    }

    @PostMapping
    public Contacts saveContact(@RequestBody Contacts contacts) {
        return contactService.saveContact(contacts);
    }
}
