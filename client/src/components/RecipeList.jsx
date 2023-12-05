import React from 'react';
import RecipeListItem from './RecipeListItem'

function RecipeList(props) {
  const recipes= Object.values(props.recipes) || [];
  const list = recipes.map((recipe) => {
    return <RecipeListItem
      key={recipe.id}
      recipe={recipe}
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
  

  