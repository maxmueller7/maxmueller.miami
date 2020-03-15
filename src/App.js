import React from 'react';
import Home from './components/pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home />
    <Footer/>
    </>
  );
}

export default App;
