import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const CartBadge = () => {
  const { cartItems } = useContext(CartContext);

  // Calcular el total de unidades
  const getTotalUnits = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-badge">
      <Link to="/Cart">
        <span role="img" aria-label="Cart Icon">
          🛒
        </span>
        <span className="item-count" title={`Total de productos en el carrito: ${getTotalUnits()}`}>
          {getTotalUnits()}
        </span>
      </Link>
    </div>
  );
};

export default CartBadge;






  
