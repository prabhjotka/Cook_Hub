import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import './App.css';


export default function App() {
  const {categories,  recipes,error,categoryRecipes, searchResults,searchRecipe, fetchItems,getCategoryId} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar  searchRecipe={searchRecipe}/>

        <Routes>
{/*        
          <Route path="/" element={<Home />} /> */}
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList recipes={searchResults || recipes} />} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
  
        </Routes>
      
      </BrowserRouter>
     
      
    </div>
  );
}