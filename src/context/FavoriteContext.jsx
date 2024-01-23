import React, { createContext, useState } from "react";

// Creando el contexto con un estado y función de actualización por defecto
const FavoriteContext = createContext({
    favoriteItems: [],
    updateFavoriteItems: () => {}
});

// Componente proveedor que encapsula la lógica del estado
export const FavoriteProvider = ({ children }) => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const updateFavoriteItems = (newItems) => {
        setFavoriteItems(newItems);
    };

    return (
        <FavoriteContext.Provider value={{ favoriteItems, updateFavoriteItems }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;
