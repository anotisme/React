import React from 'react';
import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Slider from './components/Slider';
import NewArrivals from './components/NewArrivals';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />

      <Slider />

      <Homepage />

      <NewArrivals />

      <Footer />
    </div>
  );
}

export default App;
