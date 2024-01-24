import React, { useState, useContext } from "react";
import { NavLink } from 'react-router-dom';
import CartBadge from '../cart/CartBadge';
import FavoriteContext from "../../context/FavoriteContext";

function Header({ cartItemCount }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { favoriteItems } = useContext(FavoriteContext);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <header className="header">
            <nav className="barra">
                <div className="logo">
                <NavLink to="/"><img className="logoStyle" src="../images/logo.webp" alt="logo mataplanta"></img></NavLink>
                   
                </div>
                    {/* <button id="toggleBtn" class="button--modoOscuro"><svg class="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#bf4f4e" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                    <span class="lableIt">Modo visual</span></button> */}
                   {/* Menú Hamburguesa */}
                 <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label> 
                {/* <!--Menú--> */}
                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={handleNavLinkClick}>Inicio</NavLink></li>
                    <li><NavLink to="/Products" onClick={handleNavLinkClick}>Productos</NavLink></li>
                    <li><NavLink to="/Login" onClick={handleNavLinkClick}>Login</NavLink></li>
                    <li><NavLink to="/Aboutus" onClick={handleNavLinkClick}>Sobre nosotros</NavLink></li>
                    <li><NavLink to="/Contact" onClick={handleNavLinkClick}>Contacto</NavLink></li>
                    <li><NavLink to="/Search" onClick={handleNavLinkClick}>🔎</NavLink></li>
                    <li><NavLink to="/WishList" onClick={handleNavLinkClick}>❤️ {favoriteItems.length}</NavLink></li>
                    <li><NavLink to="/Cart" onClick={handleNavLinkClick}><CartBadge itemCount={cartItemCount} /></NavLink></li>
                </ul>
                
                
            </nav>
        </header>
    );
}

export default Header;