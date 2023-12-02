import React from 'react';
import RecipeList from './RecipeList';

function SearchRecipe(props) {
  return(
<>
<RecipeList recipes={props.recipes}/>
  </>
  )
  

  
}

export default SearchRecipe;