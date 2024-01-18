import './App.css';
import Footer from './Components/footer/Footer';
import './Components/footer/Footer.css';
import Header from './Components/header/Header';
import './Components/header/Header.css';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './pagination.css'
// import NavigationBar from './NavegationBar';
// import ProductListFiltered from './ProductListFiltered';

function App() {

  return (
    <div>
      <Header />
      {/* <NavigationBar />
      <ProductListFiltered/> */}
      <Pagination  />
      <Footer />
    </div>
  );
}

export default App;
