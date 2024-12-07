import React, { useContext } from 'react'
import "../styles/Navbar.css";
import { ThemeContext } from './ThemeProvider';

const Footer = () => {
  const {theme, toggleTheme} =useContext(ThemeContext) 
  return (
    <footer className={theme} >      
      <img src="/images/DH.png" alt="DH-logo" />
      <img src="/images/ico-facebook.png" width="50" height="50" alt="Faceboock" />
      <img src="/images/ico-instagram.png" alt="Instagram" />
      <img src="/images/ico-whatsapp.png" alt="Whatshap" />
      <img src="/images/ico-tiktok.png" alt="Tiktok" />
    </footer>
  );
};
export default Footer;
