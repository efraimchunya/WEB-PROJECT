package com.personalportfolio.project.portfoliopersonal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personalportfolio.project.portfoliopersonal.model.Contacts;
import com.personalportfolio.project.portfoliopersonal.repository.ContactsRepository;

@Service
public class ContactsService {

    @Autowired
    private ContactsRepository contactRepository;

    public List<Contacts> getAllContacts() {
        return contactRepository.findAll();
    }

    public Contacts saveContact(Contacts contacts) {
        return contactRepository.save(contacts);
    }
}
