import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>
      <ul className="nav-links">
        <li>Men</li>
        <li>Women</li>
        <li>Mobile Covers</li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn">Login</button>
        <FaShoppingCart className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
