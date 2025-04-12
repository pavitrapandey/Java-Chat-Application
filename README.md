
# 💬 Java Chat Application

A full-stack real-time chat application built using **Spring Boot** for the backend and **React.js (with Vite)** for the frontend. It enables users to create and join chat rooms with instant messaging using **WebSocket** technology.

---

## 🛠 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring WebSocket
- REST API
- Maven

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

---

## 📁 Project Structure

```
Java-Chat-Application-main/
│
├── Chat-App/                   # Backend (Spring Boot)
│   ├── src/main/java/com/chat_application
│   ├── pom.xml
│   └── ...
│
├── front-chat/                # Frontend (React)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 17+
- Maven
- Node.js (v16+)
- npm or yarn

---

### ▶️ Running the Backend

1. Navigate to the backend folder:
   ```bash
   cd Java-Chat-Application-main/Chat-App
   ```

2. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will start on `http://localhost:8080`.

---

### 💻 Running the Frontend

1. Navigate to the frontend folder:
   ```bash
   cd Java-Chat-Application-main/front-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

---

## ✨ Features

- Real-time chat via WebSockets
- Create and join chat rooms
- React Context API for state management
- Tailwind CSS for styling
- Axios for API communication

---

## 🧪 API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| GET    | `/rooms`         | Get all rooms              |
| POST   | `/room/{room}`   | Create or join a room      |
| GET    | `/chat/{room}`   | Get messages of a room     |

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for any improvements or bug fixes.

---

## 📬 Contact

For any questions or feedback, feel free to reach out or raise an issue on GitHub.
