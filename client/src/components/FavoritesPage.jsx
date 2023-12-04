// FavoritesPage.jsx
import React from 'react';
import RecipeList from './RecipeList';

function FavoritesPage({ favorites }) {
  return (
    <div>
      <h1>Favorite Recipes</h1>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.name}</p>
          {/* ... display other details of the favorite recipe */}
        </div>
      ))}
    </div>
  );
}

export default FavoritesPage;
