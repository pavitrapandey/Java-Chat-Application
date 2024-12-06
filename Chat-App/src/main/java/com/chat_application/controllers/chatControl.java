package com.chat_application.controllers;


import com.chat_application.entities.Message;
import com.chat_application.entities.Room;
import com.chat_application.playload.MessageRequest;
import com.chat_application.repositories.roomRepo;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
@CrossOrigin("/http://localhost:5173")
public class chatControl {
    private roomRepo roomRepo;

    public chatControl(roomRepo roomRepo){
        this.roomRepo=roomRepo;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(
            @DestinationVariable String roomId,
            @RequestBody MessageRequest request
    ){
        Room room=roomRepo.findByRoomId(request.getRoomId());
        Message message=new Message();
        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimeStamp(LocalDateTime.now());


        if(room!=null){
            room.getMessage().add(message);
            roomRepo.save(room);
        }else{
            throw new RuntimeException("Room not found");
        }

        return message;
    }
}
