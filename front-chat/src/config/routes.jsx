import React from 'react';
import { Routes,Route } from 'react-router';
import App from '../App';
import ChatPage from '../components/ChatPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/about" element={<h1>About Page </h1>} />
      <Route path="/*" element={<h1>What the Hell Are you Searching?? </h1>} />
    </Routes>
  )
}

export default AppRoutes