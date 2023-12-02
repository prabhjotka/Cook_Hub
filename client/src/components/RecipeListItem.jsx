
import React from 'react';

class RecipeListItem extends React.Component {
  render() {
    const { recipe } = this.props;

    return (
      <li>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>{recipe.instructions}</p>
      </li>
    );
  }
}

export default RecipeListItem;
