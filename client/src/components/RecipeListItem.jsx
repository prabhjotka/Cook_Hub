

import React from 'react';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
function RecipeListItem(props) {

  const { id, name, description, instructions, calories, protein, carbs, image_url, ingredients_list } = props.recipe;
  const imageUrl = `/${image_url}`;
  return (
    <div className="col">
      <div className="card border-light mb-3">
        <div style={{ height: "400px", overflow: 'hidden' }}>
          <img src={ imageUrl} className="card-img-top" alt={name} />
        </div>

        <div className="card-body">
          <h5 className="card-title"> <Link to={`/recipes/${id}`}>
            {name}
          </Link></h5>

          {description && (<p className="card-text">{description}</p>)}
        </div>
      </div>
    </div>
  );
}

export default RecipeListItem;


