import React from 'react';
import CategorywiseRecipeItem from './CategorywiseRecipeItem';


function CategorywiseRecipeList(props) {
  const categoryRecipes= Object.values(props.categoryRecipes) || [];
  const list = categoryRecipes.map((categoryRecipe) => {
    return <CategorywiseRecipeItem
      key={categoryRecipe.id}
      categoryRecipe={categoryRecipe}
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

export default  CategorywiseRecipeList;