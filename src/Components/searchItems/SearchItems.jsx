import React, { useState, useEffect, useContext } from 'react';
import itemsData from './products.json';
import { CartContext } from '../../context/CartContext';

function SearchItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, updateCartItemCount } = useContext(CartContext);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearch = () => {
    const filteredItems = itemsData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      setItems(itemsData);
    }
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: (product.quantity || 0) + 1 });
    if (updateCartItemCount) {
      updateCartItemCount();
    }
    // alert(`${product.name} añadido al carrito!`);
  };

  return (
    <div className="wrapper">
      <div>
        <label htmlFor="search">¿Qué artículo te gustaría encontrar?:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {isLoaded && (
        <ul className="card-grid">
          {items.map((item) => (
            <li key={item.id}>
              <article className="card">
                <div className="card-image">
                  <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      Precio: <span>{item.price}</span>
                    </li>
                    <li>
                      Categoria: <span>{item.category}</span>
                    </li>
                    <li>
                      Descripcion: <span>{item.description}</span>
                    </li>
                  </ol>
                  <button onClick={() => handleAddToCart(item)}>Añadir al carrito</button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchItems;
