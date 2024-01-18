
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <img src={product.imgUrl} alt={product.name} />
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
