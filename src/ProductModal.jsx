import React, { useState } from 'react';

const ProductModal = ({ product, closeModal }) => {
  return (
    <section className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
      <img src={product.imgUrl} alt={product.name} />
      <div className='info'>
          <h2>{product.name}</h2>
      <p>Precio: <strong>${product.price}</strong></p>  
        <p>Categoría: {product.category}</p>
        <p>{product.description}</p>
      </div>
      </div>
    </section>
  );
};

export default ProductModal;
