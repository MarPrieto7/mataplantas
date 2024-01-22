import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/footer/Footer';
import Home from '../page/Home';
import Cart from '../page/Cart';
import Contact from '../page/Contact';
import Login from '../page/Login';
import Products from '../page/Products';
import Register from '../page/Register';
import Search from '../page/Search';
import { Wishlist } from '../Components/Wish/Wish';


import '../App.css';
import '../Components/footer/Footer.css';
import '../Components/header/Header.css';
import '../page/Pagination.css';
import '../page/ProductModal.css';
import '../Components/principal/Principal.css';
import '../page/Cart.css';
import '../Components/forms/Registercomponent.css'
import '../Components/forms/Logincomponent.css'


function RoutesProject() {
  return (
    <Router>
      
        <Header />
        <Routes>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Wishlist' element={<Wishlist />} />
        </Routes>
        <Footer />
    
    </Router>
  );
}

export default RoutesProject;
