package com.chat_application.controllers;

import com.chat_application.entities.Message;
import com.chat_application.entities.Room;
import com.chat_application.repositories.roomRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin("/http://localhost:5173")
public class roomControl {
    private roomRepo roomRepo;
    public roomControl(roomRepo roomRepo){
        this.roomRepo=roomRepo;
    }
    //create room

   @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId){
        if(roomRepo.findByRoomId(roomId)!= null){
            return ResponseEntity.badRequest().body("Room Already Exist");
        }
        //create new room
       Room room = new Room();
       room.setRoomId(roomId); // Corrected method name
       roomRepo.save(room);
       return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId){
        Room room=roomRepo.findByRoomId(roomId);
        if(room==null){
            return ResponseEntity.badRequest().body("Room not find");
        }
        return ResponseEntity.ok(room);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessage(@PathVariable String roomId,
                                                    @RequestParam(value ="page",defaultValue = "0",required = false) int page,
                                                    @RequestParam(value = "size",defaultValue = "20",required = false) int size){
        Room room=roomRepo.findByRoomId(roomId);
        if(room==null){
            return ResponseEntity.badRequest().build();
        }
        List<Message> messages=room.getMessage();
        int start=Math.max(0,messages.size()-(page+1)*size);
        int end=Math.min(messages.size(),start+size);
       List<Message> paginatedMessages= messages.subList(start,end);
       return ResponseEntity.ok(paginatedMessages);
    }
}
