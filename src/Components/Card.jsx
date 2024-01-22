// Card.js
import React, { useContext } from 'react';
import FavoriteContext from '../context/FavoriteContext'; // Asegúrate de que la ruta sea correcta

const Card = ({ productData }) => {
    // Utiliza el contexto de favoritos
    const { favoriteItems, updateFavoriteItems } = useContext(FavoriteContext);
    const handleAddToFavorites = () => {
        // Verifica si el item ya está en favoritos para evitar duplicados
        if (!favoriteItems.includes(productData)) {
            const newFavorites = [...favoriteItems, productData];
            updateFavoriteItems(newFavorites);
        }
    };
    return (
        <div>
            <button onClick={handleAddToFavorites}>💙</button>
        </div>
    );
};

export default Card;
