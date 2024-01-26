import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mockup de CartContext para poder probar el código
const CartContext = React.createContext({
  addToCart: () => {},
  updateCartItemCount: () => {},
});

// Mockup de Modal para poder probar el código
const Modal = ({ message, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

const Pagination = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { addToCart, updateCartItemCount } = useContext(CartContext);

  const productsPerPage = 4;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const allCategories = getUniqueCategories(productsData);

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
    setShowProductModal(true);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: (product.quantity || 0) + 1 });

    if (updateCartItemCount) {
      updateCartItemCount();
    }

    setSelectedProduct(product);
    setShowCartModal(true);

    // Cerrar el modal del carrito después de 2 segundos
    setTimeout(() => {
      setShowCartModal(false);
    }, 2000);
  };

  const handleCategoryChange = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Limpiar la categoría seleccionada al cambiar de página
    setSelectedCategory(null);
  }, [currentPage]);

  return (
    <section className="product-section">
      <h1 className="section-title"> Puedes escoger a tu próxima víctima...</h1>
      <section className='products'>
        <CategoryFilter
          categories={['all', ...allCategories]}  
          onCategoryChange={handleCategoryChange}
        />
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
<div><button class="btn" onClick={() => navigate('/Login')}>50% de Descuento</button></div>

</section>
    </section>
  );
};

// Función para obtener categorías únicas de los productos
function getUniqueCategories(products) {
  return Array.from(new Set(products.map((product) => product.category)));
}

export default Pagination;
