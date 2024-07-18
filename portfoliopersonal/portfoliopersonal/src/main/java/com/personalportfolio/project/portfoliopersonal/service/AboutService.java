package com.personalportfolio.project.portfoliopersonal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.personalportfolio.project.portfoliopersonal.model.About;
import com.personalportfolio.project.portfoliopersonal.repository.AboutRepository;
@Service
public class AboutService {

    private final AboutRepository aboutRepository;
    @Autowired
    public AboutService(AboutRepository aboutRepository){
        this.aboutRepository=aboutRepository;

    }
    public List<About> getAllAbout(){
    return aboutRepository.findAll();
    }
    public About saveOrUpdateAbout(About about){
        return aboutRepository.save(about);
    }
    public void deleteAbout(Long id){
        aboutRepository.deleteById(id);
    } 
}

