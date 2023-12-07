import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();
export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleFavoriteToggle = (recipeId) => {
    if (favoriteRecipes.includes(recipeId)) {
      setFavoriteRecipes(favoriteRecipes.filter((id) => id !== recipeId));
    } else {
      setFavoriteRecipes([...favoriteRecipes, recipeId]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteRecipes, handleFavoriteToggle }}>
      {children}
    </FavoriteContext.Provider>
  );
};
