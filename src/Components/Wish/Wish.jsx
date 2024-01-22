// import React from "react";

// export const Wishlist = () =>{
//     return(
//         <div>
//             <div className="cart-section">
//       <h1 className="section-title">Productos Favoritos</h1>
//       <p>No hay productos en tu lista de favoritos.</p>
//       <div className="cart-actions">
//         <button onClick={() => window.location.href = '/'}>Volver a la Página de Inicio</button>
//       </div>
//     </div>
//         </div>
//     )
// }

// FavoriteList.js
import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';

const FavoriteList = () => {
    const { favoriteItems } = useContext(FavoriteContext);

    return (
        <div>
            <h3>Mis Favoritos</h3>
            <ul>
            {favoriteItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                  <p className="cart-item-price">Precio unitario: {item.price}€</p>
                  <p className="cart-item-total">Total: {item.price * item.quantity}€</p>
                </div>
                <div className="cart-item-actions">
                </div>
              </li>
            ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
