import React from "react";
import { Link } from 'react-router-dom';
import CartBadge from '../cart/CartBadge';
import { CartContext } from "../../context/CartContext";

function Header({ cartItemCount }) {
    const handleToggleMenu = () => {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('active');
    };
  
    return (
      <header className="header">
        <nav className="barra">
          <Link to="#">mataplantas.com</Link>
          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Products">Productos</Link></li>
            <li><Link to="/Register">Registro</Link></li>
            <li><Link to="/Search">🔎</Link></li>
            <li><Link to="/Cart"><CartBadge /></Link></li>
          </ul>
          <button id="toggleBtn" onClick={handleToggleMenu}>
            <svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              {/* ... Contenido del SVG ... */}
            </svg>
            <span className="lableIt">Modo visual</span>
          </button>
          <input className="menu__btn" type="checkbox" id="menu__btn" />
          <label className="menu__icon" htmlFor="menu__btn"><span className="navicon"></span> </label>
        </nav>
      </header>
    );
  }
  
  export default Header;