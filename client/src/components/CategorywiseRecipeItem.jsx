
import React from 'react';

function CategorywiseRecipeItem(props) {

  const { name,description,instructions,calories,protein,carbs,image_url,ingredients_list} = props.categoryRecipe;
  const imageUrl = `/${image_url}`;
  return (
    <div className="col">
      <div className="card border-light mb-3">
        <div style={{ height: "400px", overflow: 'hidden' }}><img src={imageUrl} className="card-img-top" alt={name} /></div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Instructions:</strong> {instructions}
            </li>
            <li className="list-group-item">
              <strong>Ingredients List:</strong> {ingredients_list}
            </li>
            <li className="list-group-item">
              <strong>Nutritional Information:</strong>
              <p>Carbs:  {carbs}</p>
              <p>Calories:{calories}</p>
              <p>Protein:{protein}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategorywiseRecipeItem;


