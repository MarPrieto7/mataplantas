import React from "react";
import { Link } from "react-router-dom";

const CartBadge = ({ itemCount }) => {
  return (
    <div className="cart-badge">
      <Link to="/Cart">
        <span role="img" aria-label="Cart Icon">
          🛒
        </span>
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartBadge;

  
