import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './App.css';


export default function App() {
  const {categories,  recipes,error,categoryRecipes,  fetchItems,getCategoryId} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar />
        <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
        </Routes>
      
      </BrowserRouter>
     
      
    </div>
  );
}