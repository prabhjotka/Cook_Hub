import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
const RecipeListItem = (props) => {
  const { id, name,  description,  instructions,  calories,  protein,  carbs,  image_url,  ingredients_list } = props.recipe;
  const imageUrl = `/${image_url}`;

  const handleFavoriteClick = () => {
    addToFavorites(props.recipe.id); 
  };

  const addToFavorites = (recipeId) => {

    console.log(`Adding recipe ${recipeId} to favorites`);
  };

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
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Instructions:</strong> {instructions}
            </li>
            <li className="list-group-item">
              <strong>Ingredients:</strong> {ingredients_list}
            </li>
            <button onClick={handleFavoriteClick}>
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <li className="list-group-item">
              <strong>Nutritional Information:</strong>
              {carbs && <p>Carbs: {carbs}</p>}
              {calories && <p>Calories: {calories}</p>}
              {protein && <p>Protein: {protein}</p>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeListItem;
