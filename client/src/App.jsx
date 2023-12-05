import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchRecipe from './components/SearchRecipe';
import AddNewRecipe from './components/AddNewRecipe';
import HomePage from './components/HomePage';
import './App.css';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import Favorite from './components/FavouritePage';


export default function App() {
  const {categories,  recipes,error,categoryRecipes, searchResults, addRecipe,searchRecipe,getCategoryId}
   = useApplicationData();

  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <NavBar  searchRecipe={searchRecipe}/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addRecipe" element={<AddNewRecipe categories={categories}  addRecipe={ addRecipe}/>} /> 
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList  recipes={recipes }/>} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
          <Route path="/search" element={<SearchRecipe recipes={searchResults} />} />
          <Route path="/favourite" element={<Favorite />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
     </AuthProvider>
   
     
      
    </div>
  );
}