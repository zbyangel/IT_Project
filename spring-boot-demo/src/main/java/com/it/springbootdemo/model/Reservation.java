package com.it.springbootdemo.model;

import java.util.Date;

public class Reservation {

    private String RecordId;
    private String userId;
    private String ISBN;
    private Date Time;
    private String Validity;

    public Reservation(String recordId, String userId, String ISBN, Date time, String validity) {
        this.RecordId = recordId;
        this.userId = userId;
        this.ISBN = ISBN;
        this.Time = time;
        this.Validity = validity;
    }

    public Date getTime() {
        return this.Time;
    }

    public String getISBN() {
        return this.ISBN;
    }

    public String getRecordId() {
        return this.RecordId;
    }

    public String getUserId() {
        return this.userId;
    }

    public String getValidity() {
        return this.Validity;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "RecordId='" + RecordId + '\'' +
                ", userId='" + userId + '\'' +
                ", ISBN='" + ISBN + '\'' +
                ", Time=" + Time +
                ", Validity='" + Validity + '\'' +
                '}';
    }
}
