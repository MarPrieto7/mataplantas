import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartBadge from '../cart/CartBadge'
import FavoriteContext from "../../context/FavoriteContext";

function Header({ cartItemCount }) {

    const { favoriteItems } = useContext(FavoriteContext); // Asegúrate de desestructurar correctamente



    return (
        <header className="header">
            <nav className="barra">
                <div className="logo">
                    <Link to="/"><img className="logoStyle" src="../images/logo.webp" alt="logo mataplanta"></img></Link>
                </div>
                <ul className="menu">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Products">Productos</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Aboutus">Sobre nosotros</Link></li>
                    <li><Link to="/Contact">Contacto</Link></li>
                    <li><Link to="/Search">🔎</Link></li>
                    <li><Link to="/WishList">❤️{favoriteItems.length}</Link></li>
                    <li><Link to="/Cart"><CartBadge itemCount={cartItemCount} /></Link></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;