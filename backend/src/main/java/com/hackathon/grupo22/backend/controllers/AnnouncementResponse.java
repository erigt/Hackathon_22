package com.hackathon.grupo22.backend.controllers;
// import com.hackathon.grupo22.backend.controllers.Category;

public class AnnouncementResponse {
    
    private Integer id;
    private String title;
    private String description;
    private String contact;
    private Integer price;
    private String imageUrl;
    private Category category;
    private String location;
    
    public AnnouncementResponse(Integer id, String title, String description, String contact, Integer price,
            String imageUrl, Category category, String location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.contact = contact;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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
