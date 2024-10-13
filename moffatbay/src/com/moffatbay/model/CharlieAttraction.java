package com.moffatbay.model;

public class CharlieAttraction {
    private int attractionId;
    private String name;
    private String description;
    private String location;
    private String openingHours;
    private String contactInfo;
    private double entryFee;

    public CharlieAttraction(int attractionId, String name, String description, String location, String openingHours, String contactInfo, double entryFee) {
        this.attractionId = attractionId;
        this.name = name;
        this.description = description;
        this.location = location;
        this.openingHours = openingHours;
        this.contactInfo = contactInfo;
        this.entryFee = entryFee;
    }

    public int getAttractionId() {
        return attractionId;
    }

    public void setAttractionId(int attractionId) {
        this.attractionId = attractionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(String openingHours) {
        this.openingHours = openingHours;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public double getEntryFee() {
        return entryFee;
    }

    public void setEntryFee(double entryFee) {
        this.entryFee = entryFee;
    }
}
