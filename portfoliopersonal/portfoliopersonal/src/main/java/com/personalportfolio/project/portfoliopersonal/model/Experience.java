package com.personalportfolio.project.portfoliopersonal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="experience")
public class Experience {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String proficiencylevel;

    public Experience(){
    }
    public Experience(String name,String description,String proficiencylevel){
        this.name=name;
        this.description=description;
        this.proficiencylevel=proficiencylevel;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getProficiencylevel() {
        return proficiencylevel;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setProficiencyLevel(String proficiencylevel) {
        this.proficiencylevel = proficiencylevel;
    }
    
    
}
