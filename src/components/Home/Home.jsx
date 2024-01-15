import React from 'react';

import Logo from './home.png';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h3>Olá, eu sou a</h3>
        <h1>Giovana Tochtrop</h1>
        <h3><span className="multiple-text">Desenvolvedora Front-End Junior</span></h3>
        <a href="curriculo/giovana_nascimento.pdf" download="Giovana Tochtrop" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={Logo} alt=""/>
      </div>
    </div>
  );
}

export default Home;
