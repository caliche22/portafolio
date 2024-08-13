import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Carlos Saul Arboleda Saavedra</h1>
      <p>FullStack Developer with 5 years of experience</p>
      <p>Cali, Colombia</p>
      <p><a href="tel:+573183763021">(+57) 3183763021</a></p>
      <p><a href="mailto:caliche.a2@gmail.com">caliche.a2@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/carlosarboleda-saavedra-56531422/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/caliche22" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </header>
  );
};

export default Header;
