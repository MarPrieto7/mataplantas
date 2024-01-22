import React, { useState, useEffect } from 'react';
import itemsData from './products.json';

function SearchItems() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  console.log(itemsData)

  const handleSearch = () => {
    // Filtrar los elementos que coincidan con el término de búsqueda
    const filteredItems = itemsData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    // Si el término de búsqueda está vacío, mostrar todos los productos
    if (event.target.value === '') {
      setItems(itemsData);
    }
  };

  return (
    <div className="wrapper">
      <div>
        <label htmlFor="search">Buscar:</label>
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

