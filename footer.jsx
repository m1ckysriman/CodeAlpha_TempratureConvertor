import React from 'react';
import './style.css'; // Import the CSS file

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; copyright {currentDate} </p>
      <p>made by sriman konda</p>
    </footer>
  );
};

export default Footer;