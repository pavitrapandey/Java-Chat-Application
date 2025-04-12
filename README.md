# Java Chat Application

A real-time chat application built using Java, Spring Boot, and WebSockets. This project demonstrates the use of WebSocket communication in a Spring Boot backend, enabling multiple users to chat in different rooms.

## Features

- Real-time messaging using WebSockets
- Room-based chat segregation
- Clean MVC structure
- Easy to run using Maven

## Tech Stack

- **Java 17+**
- **Spring Boot**
- **Spring WebSocket**
- **Maven**

## Project Structure

```
Chat-App/
├── src/
│   └── main/
│       └── java/com/chat_application/
│           ├── ChatAppApplication.java        # Main application file
│           ├── config/
│           │   ├── WebConfig.java             # General web configuration
│           │   └── WebSocketConfig.java       # WebSocket configuration
│           ├── controllers/
│           │   ├── chatControl.java           # Handles chat endpoints
│           │   └── roomControl.java           # Handles chat room endpoints
│           └── entities/
│               └── Message.java               # Message entity class
├── pom.xml                                    # Maven configuration
```

## Getting Started

### Prerequisites

- Java 17 or above
- Maven 3.x

### Running the Application

1. Open terminal and navigate to the `Chat-App` directory.
2. Run the application using Maven:

```bash
./mvnw spring-boot:run
```

3. The server will start at `http://localhost:8080`

## Author

- Pavitra Pandey

## License

This project is licensed under the MIT License.
