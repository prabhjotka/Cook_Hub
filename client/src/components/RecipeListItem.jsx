// RecipeListItem.jsx

import React from 'react';

function RecipeListItem({ recipe, onToggleFavorite }) {
  const { name, description, instructions, nutritional_information, image_url, isFavorite } = recipe;

  const handleToggleFavorite = () => {
    onToggleFavorite(recipe.id);
  };

  return (
    <div className="col">
      <div className="card border-light mb-3">
      <div style={{ height: "400px", overflow: 'hidden' }}>
          <img src={image_url} className="card-img-top" alt={name} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Instructions:</strong> {instructions}
            </li>
            <li className="list-group-item">
              <strong>Nutritional Information:</strong>
              <p>Carbs: {nutritional_information.carbs}</p>
              <p>Calories: {nutritional_information.calories}</p>
              <p>Protein: {nutritional_information.protein}</p>
            </li>
          </ul>
        </div>
        <button onClick={handleToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default RecipeListItem;
