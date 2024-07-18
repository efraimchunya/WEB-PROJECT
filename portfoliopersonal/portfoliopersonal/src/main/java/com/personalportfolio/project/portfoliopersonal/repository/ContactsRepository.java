package com.personalportfolio.project.portfoliopersonal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personalportfolio.project.portfoliopersonal.model.Contacts;

public interface  ContactsRepository extends JpaRepository<Contacts, Long> {

}
