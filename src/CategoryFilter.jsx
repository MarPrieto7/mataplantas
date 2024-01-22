import React, { useState } from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <aside className="category">
      <h2>Categorías</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
           <i class="fa-sharp fa-solid fa-play fa-2xs"></i> {category}
          </li>
        ))}  
         <p onClick={() => handleCategoryClick(null)}>Mostrar todos</p>
      </ul>
      
    </aside>
  );
};

export default CategoryFilter;
