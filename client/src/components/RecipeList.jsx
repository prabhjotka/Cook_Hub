// RecipeList.jsx
import React from 'react';
import RecipeListItem from "./RecipeListItem";


class RecipeList extends React.Component {
  render() {
    const { recipes } = this.props;

    return (
      <div>
        <h2>Recipe List</h2>
        <ul>
          {recipes.map(recipe => (
            <RecipeListItem key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
