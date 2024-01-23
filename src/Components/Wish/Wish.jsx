
import React, { useContext } from 'react';
import FavoriteContext from '../../context/FavoriteContext';

const FavoriteList = () => {
    const { favoriteItems, updateFavoriteItems } = useContext(FavoriteContext);

    const removeFavorite = (itemToRemove) => {
        // Filtrar el ítem que se desea eliminar
        const newFavorites = favoriteItems.filter(item => item.id !== itemToRemove.id);
        // Actualizar la lista de favoritos con la nueva lista
        updateFavoriteItems(newFavorites);
    };

    return (
        <div className="product-section">
            <h3>Mis Favoritos</h3>
            <ul className="product-list">
                {favoriteItems.map((item) => (
                    <li key={item.id} className="product-item">
                        <div>
                            <img src={item.imgUrl} alt={item.name} className="product-image" />
                            <p className="product-name">{item.name}</p>
                            <p className="cart-item-price">Precio: {item.price}€</p>
                            <button onClick={() => {removeFavorite(item)}}>Quitar de favoritos</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
