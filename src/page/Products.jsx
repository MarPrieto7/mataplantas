import React, { useState, useContext } from 'react';
import ProductModal from '../page/ProductModal';
import { CartContext } from '../context/CartContext'
import productsData from '../data/products.json';

const Pagination = () => {
  const productsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart, updateCartItemCount } = useContext(CartContext);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: (product.quantity || 0) + 1 });
    if (updateCartItemCount) {
      updateCartItemCount(); // Asegurarse de que updateCartItemCount sea una función
    }
    alert(`¡${product.name} añadido al carrito!`);
  };


  return (
    <section className="product-section">
      <h1 className="section-title"> Puedes escoger a tu próxima víctima...</h1>
      <ul className="product-list">
        {currentProducts.map((product) => (
          <li key={product.id} className="product-item">
            <h3 className="product-name">{product.name}</h3>
            <img
              src={product.imgUrl}
              alt={product.name}
              className="product-image"
              onClick={() => handleProductClick(product)}
            />
            <p className="product-price">{product.price}€</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <span className="pagination-info">Página {currentPage} de {totalPages}</span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
    </section>
  );
};

export default Pagination ;


