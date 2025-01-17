// Import modules 
import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './navbar.css';
import logo from '../../assets/logo.png'; // Logo import

// JSX declarations
const Navbar = () => {
  // Detect current location to change navbar styling based on the page
  const siteLocation = useLocation();
  const inHomePage = siteLocation.pathname === '/';

  return ( 
    // Navigation bar with dynamic class based on current page
    <nav className={inHomePage ? 'home-nav' : 'other-nav'}> 
      <img src={logo} alt="logo" className="nav-logo" />
      <ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/discography">Discography</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
};

// Export Navbar
export default Navbar;