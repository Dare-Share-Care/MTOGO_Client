import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import RestaurantView from './views/RestaurantView';
import MenuView from './views/MenuView';
import Login from "./views/Login";
import authService from './services/authService'; // Assuming authService has a logout method
import CourierDashboard from './views/CourierDashboard';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (): void => {
    setIsLoggedIn(true);
  };

  const handleLogout = (): void => {
    authService.logout(); // Assuming authService handles the actual logout logic
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<RestaurantView />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/menu/:restaurantId" element={<MenuView />} />
        <Route path="/courier" element={<CourierDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;