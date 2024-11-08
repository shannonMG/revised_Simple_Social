import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('authToken');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <h1>Social Circles</h1>
      <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
    </header>
  );
};

export default Header;
