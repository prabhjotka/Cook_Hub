
import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails(props) {
  const { id } = useParams();
  let recipeDetails;
  const recipes = Object.values(props.recipes) || [];

  recipeDetails = recipes.find(recipe => recipe.id === Number(id));
  if (!recipeDetails) {
    return <div>Recipe not found</div>;
  }
  const imageUrl = `/${recipeDetails.image_url}`;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <img src={imageUrl} className="img-fluid rounded" alt={recipeDetails.name} />
              </div>
              <h5 className="card-title mt-3">{recipeDetails.name}</h5>

              {recipeDetails.description && (
                <p className="card-text">{recipeDetails.description}</p>
              )}

              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <strong>Instructions:</strong> {recipeDetails.instructions}
                </li>
                <li className="list-group-item">
                  <strong>Ingredients:</strong> {recipeDetails.ingredients_list}
                </li>
                <li className="list-group-item">
                  <strong>Nutritional Information:</strong>
                  {recipeDetails.carbs && <p>Carbs: {recipeDetails.carbs}</p>}
                  {recipeDetails.calories && <p>Calories: {recipeDetails.calories}</p>}
                  {recipeDetails.protein && <p>Protein: {recipeDetails.protein}</p>}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;

