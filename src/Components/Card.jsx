import React, { useContext } from 'react';
import FavoriteContext from '../context/FavoriteContext';

const Card = ({ productData }) => {
    // Utiliza el contexto de favoritos
    const { favoriteItems, updateFavoriteItems } = useContext(FavoriteContext);

    const handleAddToFavorites = () => {
        // Verifica si el item ya está en favoritos
        const isFavorite = favoriteItems.includes(productData);

        // Si está en favoritos, lo elimina, si no, lo añade
        const newFavorites = isFavorite 
            ? favoriteItems.filter(item => item !== productData) 
            : [...favoriteItems, productData];

        updateFavoriteItems(newFavorites);
    };

    return (
        <div>
            <button onClick={handleAddToFavorites}>💙</button>
        </div>
    );
};

export default Card;
