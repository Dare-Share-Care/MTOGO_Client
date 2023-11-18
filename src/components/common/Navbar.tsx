import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/restaurant">restaurant</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/courier">Courier</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/order">Order</Link>
      <Link to="/orderdetail">OrderDetail</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/complaint">Complaint</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile">Profile</Link>

      <Link to="/example">Example</Link>
    </nav>
  );
};

export default Navbar;