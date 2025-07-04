import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faAsterisk, faUser, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p><FontAwesomeIcon icon={faCopyright} /> {currentYear} The-Continental. All rights reserved.</p>
        <div className="footer-links">
          <a href="/"><FontAwesomeIcon icon={faShieldHalved} /> Privacy Policy</a>
          <a href="/"><FontAwesomeIcon icon={faAsterisk} /> Terms of Service</a>
          <a href="mailto:praveenjadhav1510@gmail.com"><FontAwesomeIcon icon={faUser} /> Contact Us</a>
          <a href="/https://github.com/praveenjadhav1510/The-Continental">Github repo</a>
          <a href="/https://github.com/praveenjadhav1510">Github Profile</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
