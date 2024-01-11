import React from 'react';
import Header from './components/Header/Header';
import DarkMode from './components/DarkMode/DarkMode';

import './App.css';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Header />
    </div>
  );
}

export default App;
