import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/footer/Footer'
import Header from '../Components/header/Header'
import Home from '../page/Home'
import Cart from '../page/Cart'
// import Aboutus from '../page/Aboutus'
import Contact from '../page/Contact'
import Login from '../page/Login'
import Products from '../page/Products'
import Register from '../page/Register'
import Search from '../page/Search'

import '../App.css';
// import Footer from './Components/footer/Footer'
import '../Components/footer/Footer.css'
// import Header from './Components/header/Header'
import '../Components/header/Header.css'
// import Home from './page/Home';
import '../page/Pagination.css'



function RoutesProject() {
  return (
    <BrowserRouter>
   
        <Header/>
            <Routes>
                {/* <Route path='/Aboutus' element={<Aboutus/>} /> */}
                <Route path='/Cart' element={<Cart/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/Login' element={<Login/>} />
                <Route path='/Products' element={<Products/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Search' element={<Search/>} />
            </Routes>
        <Footer />
  
    </BrowserRouter>
  )
}

export default RoutesProject