// import React from "react";

// export const Wishlist = () => {
//     return (
//         <div>
//             <div className="cart-section">
//                 <h1 className="section-title">Productos Favoritos</h1>
//                 <p>No hay productos en tu lista de favoritos.</p>
//                 <div className="cart-actions">
//                     <button onClick={() => window.location.href = '/'}>Volver a la Página de Inicio</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';

const FavoriteList = () => {
    const { favoriteItems } = useContext(FavoriteContext);

    return (
        <div className="product-section">
            <h3>Mis Favoritos</h3>
            <ul className="product-list">
                {favoriteItems.map((item) => (
                    <li key={item.id} className="product-item">
                        <div>
                            <img src={item.imgUrl} alt={item.name} className="product-image" />
                            <p className="product-name">{item.name}</p>
                            <p className="cart-item-price">Precio: {item.price}€</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
