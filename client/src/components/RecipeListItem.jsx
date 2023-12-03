

import React from 'react';

function RecipeListItem(props) {

  const { name, description, instructions, nutritional_information, image_url, ingredients_list } = props.recipe;

  return (
    <div className="col">
      <div className="card border-light mb-3">
        <div style={{ height: "400px", overflow: 'hidden' }}><img src={image_url} className="card-img-top" alt={name} /></div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          {description && (<p className="card-text">{description}</p>)}
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Instructions:</strong> {instructions}
            </li>
            <li className="list-group-item">
              <strong>Ingredients:</strong> {ingredients_list}
            </li>
            { nutritional_information && (<li className="list-group-item">
              <strong>Nutritional Information:</strong>
              <p>Carbs:  {nutritional_information.carbs}</p>
              <p>Calories:{nutritional_information.calories}</p>
              <p>Protein:{nutritional_information.protein}</p>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeListItem;


