// FavoritesPage.jsx

import React from 'react';
import RecipeList from './RecipeList'; // Assuming you have a RecipeList component

function FavoritesPage({ favorites, removeFromFavorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <RecipeList recipes={favorites} onToggleFavorite={removeFromFavorites} />
    </div>
  );
}

export default FavoritesPage;
