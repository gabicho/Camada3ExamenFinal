import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import { ThemeContext } from './ThemeProvider';

export  const Navbar = () => {
  const {theme, toggleTheme} =useContext(ThemeContext) 
  return (
    <nav className={theme}>
      <Link to="/" > <h4 >DH Odonto</h4> </Link>
      <Link to="/"> <h4>Home</h4> </Link>
      <Link to="/contact"> <h4>Contact</h4> </Link>
      <Link to="/favs"> <h4>Favs</h4> </Link> 
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '🌞'}</button>
    </nav>
  );
};    
