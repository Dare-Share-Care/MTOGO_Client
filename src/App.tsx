import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// MTOGO Views
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
//import Menu from './views/Menu';
//import Profile from './views/Profile';
//import Cart from './views/Cart';
//import Order from './views/Order';
//import OrderDetail from './views/OrderDetail';
//import Feedback from './views/Feedback';
//import Complaint from './views/Complaint';
//import Checkout from './views/Checkout';
import CourierDashboard from './views/CourierDashboard';
//import RestaurantDashboard from './views/RestaurantDashboard';

// MTOGO Components
import Header from './components/Header';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = (): void => {
    setIsLoggedIn(true);
  };

  const handleLogout = (): void => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        {/*<Route path="/menu" element={<Menu />} />*/}
        {/*<Route path="/profile" element={<Profile />} />*/}
        {/*<Route path="/cart" element={<Cart />} />*/}
        {/*<Route path="/order" element={<Order />} />*/}
        {/*<Route path="/order/:orderId" element={<OrderDetail />} />*/}
        {/*<Route path="/feedback" element={<Feedback />} />*/}
        {/*<Route path="/complaint" element={<Complaint />} />*/}
        {/*<Route path="/checkout" element={<Checkout />} />*/}
        <Route path="/courier-dashboard" element={<CourierDashboard />} />
        {/*<Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />*/}
        {/* More routes can be added as per your application's needs */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
