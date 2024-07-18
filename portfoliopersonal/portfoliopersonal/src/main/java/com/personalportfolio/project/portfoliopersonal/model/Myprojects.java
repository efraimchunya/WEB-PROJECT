package com.personalportfolio.project.portfoliopersonal.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="myprojects")
public class Myprojects {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String imageurl;

    public Myprojects(){
    }
    public Myprojects(String name,String description,String imageurl){
        this.name=name;
        this.description=description;
        this.imageurl=imageurl;
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

    public String getImageurl() {
        return imageurl;
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

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    @Override
    public String toString(){
        return"Myprojects{"+"id="+id+",name='"+name+'\''+",description='"+description+'\''+",imageUrl='"+imageurl+'\''+'}';
    }
}
