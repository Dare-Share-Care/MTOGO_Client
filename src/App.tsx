import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Feedback from './pages/Feedback';
import Complaint from './pages/Complaint';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import RestaurantDashboard from './pages/RestaurantDashboard';
import Menu from './pages/Menu';
import CourierDashboard from './pages/CourierDashboard';
import Order from './pages/Order';
import OrderDetail from './pages/OrderDetail';


import Example from './pages/Example';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/courier" element={<CourierDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orderdetail" element={<OrderDetail />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
};

export default App;
