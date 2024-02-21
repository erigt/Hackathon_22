package com.hackathon.grupo22.backend.persistence;

import com.hackathon.grupo22.backend.controllers.Category;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "announcement")
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private String contact;
    private Integer price;
    private String imagenUrl;
    private Category category;
    private String location;

    public Announcement(Integer id, String title, String description, String contact, Integer price,
            String imagenUrl, Category category, String location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.contact = contact;
        this.price = price;
        this.imagenUrl = imagenUrl;
        this.category = category;
        this.location = location;
    }

    public Announcement() {

    }

    public Integer getId() {
        return id;
    }

    public void setiId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

}
