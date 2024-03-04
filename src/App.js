import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import contact from './components/contact';
import about from './components/about';
import products from './components/products';
import home from './components/home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={home} />
        <Route path="/products" component={products} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
      </Routes>
    </Router>
  );
};

export default App;

