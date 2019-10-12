package com.it.springbootdemo.service;


import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public interface RecordService {

    public int borrowBook(int bookId,int id);

    public int returnBook(int recordId);

    public JSONObject getRecordByUserId(int userId);
}
