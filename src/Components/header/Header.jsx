import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import CartBadge from '../cart/CartBadge';

function Header({ cartItemCount }) {
    const menuRef = useRef(null);
    const btnSwitchRef = useRef(null);

    const handleToggleMenu = () => {
        menuRef.current.classList.toggle('active');
    };

    const handleSwitchClick = () => {
        document.body.classList.toggle('dark');
        btnSwitchRef.current.classList.toggle('active');
    };

    return (
        <header className="header">
            <nav className="barra">
                <Link to="#">mataplantas.com</Link>
                <ul ref={menuRef} className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Products">Productos</Link></li>
                    <li><Link to="/Register">Registro</Link></li>
                    <li><Link to="/Search">🔎</Link></li>
                    <li><Link to="/Cart"><CartBadge itemCount={cartItemCount} /></Link></li>
                </ul>
                <button ref={btnSwitchRef} className="switch" id="switch" onClick={handleSwitchClick}>
                    <span><i className="fa-solid fa-sun"></i></span>
                    <span><i className="fa-solid fa-moon"></i></span>
                </button>
                <input className="menu__btn" type="checkbox" id="menu__btn" />
                <label className="menu__icon" htmlFor="menu__btn" onClick={handleToggleMenu}><span className="navicon"></span></label>
            </nav>
        </header>
    );
}

export default Header;
