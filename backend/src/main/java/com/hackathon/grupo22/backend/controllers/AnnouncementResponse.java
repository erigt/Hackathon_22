package com.hackathon.grupo22.backend.controllers;
import com.hackathon.grupo22.backend.controllers.Category;

public class AnnouncementResponse {
    
    private Integer announcementId;
    private String title;
    private String description;
    private String contact;
    private Integer price;
    private String imagenUrl;
    private Category category;
    private String location;
    
    public AnnouncementResponse(Integer announcementId, String title, String description, String contact, Integer price,
            String imagenUrl, Category category, String location) {
        this.announcementId = announcementId;
        this.title = title;
        this.description = description;
        this.contact = contact;
        this.price = price;
        this.imagenUrl = imagenUrl;
        this.category = category;
        this.location = location;
    }

    public Integer getAnnouncementId() {
        return announcementId;
    }

    public void setAnnouncementId(Integer announcementId) {
        this.announcementId = announcementId;
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
