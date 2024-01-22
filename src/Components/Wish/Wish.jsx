import React from "react";

export const Wishlist = () =>{
    return(
        <div>
            <div className="cart-section">
      <h1 className="section-title">Productos Favoritos</h1>
      <p>No hay productos en tu lista de favoritos.</p>
      <div className="cart-actions">
        <button onClick={() => window.location.href = '/'}>Volver a la Página de Inicio</button>
      </div>
    </div>
        </div>
    )
}