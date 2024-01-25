import React, { useState, useContext } from 'react';
import ProductModal from '../page/ProductModal';
import CategoryFilter from '../CategoryFilter'; 
import { CartContext } from '../context/CartContext';
import productsData from '../data/products.json';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { addToCart, updateCartItemCount } = useContext(CartContext);

  const productsPerPage = 3;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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
      updateCartItemCount();
    }
    alert(`¡${product.name} añadido al carrito!`);
  };

  const handleCategoryChange = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  return (
<section className="product-section">
      <h1 className="section-title"> Puedes escoger a tu próxima víctima...</h1>
      <p className='section-subtittle'>
        Sabemos que si estás aquí es porque probablemente no tengas la mejor relación con la naturaleza, sólo te pedimos que conozcas tus límites...
      </p>
<section className='products'>
      <CategoryFilter 
        categories={getUniqueCategories(productsData)}
        onCategoryChange={handleCategoryChange}/>
<section className='slider'>
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
            <button>💙</button>
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

        <span className="pagination-info">{currentPage} de {totalPages}</span>

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

</section >
<section className='discount'>
  <div className='discount-text'>
    <h2>
        ¿Tienes una planta en apuros, triste y desanimada?
        </h2>
      <p> 
        ¡No te preocupes, amigo! En Matoplantas.com te ofrecemos un descuento especial si nos traes tu planta que parece más un zombie que una belleza verde.
       
           No importa si está marchita, despeinada o con una crisis de identidad, aquí la recuperaremos...
      </p>
      <h3>
        ¡A qué esperas para obtener tu descuento!
      </h3>
</div>
<div><a><button className="btn">50% de descuento</button></a></div>
</section>
    </section>
  );
};

export default Pagination;

// Función para obtener categorías únicas de los productos
function getUniqueCategories(products) {
  return Array.from(new Set(products.map((product) => product.category)));
}
