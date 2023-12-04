import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchRecipe from './components/SearchRecipe';
import FavoritesPage from './components/FavoritesPage';
import './App.css';


export default function App() {
  const {categories,  recipes,error,categoryRecipes, searchResults,searchRecipe,getCategoryId,} = useApplicationData();
  const [favorites, setFavorites] = useState([]);  // State to manage favorites

  const handleToggleFavorite = (recipeId) => {
    // Check if the recipe is already in favorites
    const isFavorite = favorites.some((recipe) => recipe.id === recipeId);

    if (isFavorite) {
      // If the recipe is in favorites, remove it
      const updatedFavorites = favorites.filter((recipe) => recipe.id !== recipeId);
      setFavorites(updatedFavorites);
    } else {
      // If the recipe is not in favorites, add it
      const recipeToAdd = recipes.find((recipe) => recipe.id === recipeId);
      if (recipeToAdd) {
        const updatedFavorites = [...favorites, recipeToAdd];
        setFavorites(updatedFavorites);
      }
    }
  };

  return (
    <div className="App">
    <BrowserRouter>
        <NavBar  searchRecipe={searchRecipe}/>

        <Routes>
       
          {/* <Route path="/" element={<Home />} />  */}
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList  recipes={recipes }/>} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
          <Route path="/search" element={<SearchRecipe recipes={searchResults} />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
