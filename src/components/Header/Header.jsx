import React from 'react';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo"> Portfólio. </a>

      <nav className="navbar">
        <a className="navbarHome">Home</a>
        <a>Sobre</a>
        <a>Projetos</a>
        <a>Skills</a>
      </nav>
      
    </header>
  );
}

export default Header;
