// Importa React y cualquier otro módulo necesario
import React from 'react';

// Componente funcional de la barra de navegación
const NavigationBar = ({ categories, onCategoryChange }) => {
  return (
    <div className="navigation-bar">
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onCategoryChange(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationBar;
