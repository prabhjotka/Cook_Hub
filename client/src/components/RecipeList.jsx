// RecipeList.jsx

import React from 'react';
import RecipeListItem from './RecipeListItem';

function RecipeList({ recipes, onToggleFavorite }) {
  const list = recipes.map((recipe) => (
    <RecipeListItem key={recipe.id} recipe={recipe} onToggleFavorite={onToggleFavorite} />
  ));

  return (
    <div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {list}
      </div>
    </div>
  );
}

export default RecipeList;
