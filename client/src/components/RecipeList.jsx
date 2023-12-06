import React,{useState} from 'react';
import RecipeListItem from './RecipeListItem';
import { useEffect } from 'react';
import { useFavoriteContext } from './FavoriteContext';
function RecipeList(props) {
  const { favoriteRecipes, handleFavoriteToggle } = useFavoriteContext();  
 
  const recipes= Object.values(props.recipes) || [];
  const list = recipes.map((recipe) => {
    return <RecipeListItem
      key={recipe.id}
      recipe={recipe}
      isFavorite={favoriteRecipes.includes(recipe.id)}
        handleFavoriteToggle={handleFavoriteToggle}
       />;
  });

  return (
    <div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="row row-cols-2 row-cols-md-2 g-4">
      {list}
    </div>
  </div>
  );
}

export default RecipeList;