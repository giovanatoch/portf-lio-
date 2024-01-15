import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
// import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App">
      {/* <DarkMode /> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
