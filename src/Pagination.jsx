import React, { useState } from 'react';
import ProductModal from './ProductModal'; // Ajusta la ruta según la ubicación de tu componente
import productsData from './data/products.json';

const Pagination = () => {
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  return (
    <section className="product-section">
      <h1 className="section-title">Lista de Productos</h1>
      <ul className="product-list">
        {currentProducts.map((product) => (
          <li key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
            <h3 className="product-name">{product.name}</h3>
            <img src={product.imgUrl} alt={product.name} className="product-image" />
            <p className="product-price">Precio: {product.price}$</p>
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

export default Pagination;
