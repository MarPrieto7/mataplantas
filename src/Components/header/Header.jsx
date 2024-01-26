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
                    <NavLink to="/"><img className="logoStyle" src="../../images/Recurso_6.png" alt="logo mataplanta" /></NavLink>
                </div>

                <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label>
                {/* <!--Menú--> */}
                <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
                    <li><NavLink to="/Products" onClick={handleNavLinkClick}>Products</NavLink></li>
                    <li><NavLink to="/Login" onClick={handleNavLinkClick}>Login</NavLink></li>
                    <li><NavLink to="/Aboutus" onClick={handleNavLinkClick}>About us</NavLink></li>
                    <li><NavLink to="/Contact" onClick={handleNavLinkClick}>Contact</NavLink></li>
                    <li><NavLink to="/Search" onClick={handleNavLinkClick}>🔎</NavLink></li>
                    <li><NavLink to="/WishList" onClick={handleNavLinkClick}>❤️ {favoriteItems.length}</NavLink></li>
                    <li><NavLink to="/Cart" onClick={handleNavLinkClick}><CartBadge itemCount={cartItemCount} /></NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

