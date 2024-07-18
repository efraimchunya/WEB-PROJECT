package com.personalportfolio.project.portfoliopersonal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personalportfolio.project.portfoliopersonal.model.About;
import com.personalportfolio.project.portfoliopersonal.service.AboutService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/about")
public class AboutController {
    private final AboutService aboutService;

    @Autowired
    public AboutController(AboutService aboutService){
        this.aboutService=aboutService;
    }
    @GetMapping
    public List<About> getAllAbout(){
        return aboutService.getAllAbout();
    }
    @PostMapping
    public About saveAbout(@RequestBody About about){
        return aboutService.saveOrUpdateAbout(about);
    }
    @DeleteMapping("/{id}")
    public void deleteAbout(@PathVariable Long id){
        aboutService.deleteAbout(id);
    }
}
