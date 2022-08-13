import React from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

const App:React.FC = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Footer/>
    </main>
  );
}

export default App;
