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


export default function App() {
  const {categories,  recipes,error,categoryRecipes, searchResults,addItem,searchRecipe,getCategoryId} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar  searchRecipe={searchRecipe}/>
        
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addRecipe" element={<AddNewRecipe categories={categories} addItem={addItem}/>} /> 
       
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList  recipes={recipes }/>} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
          <Route path="/search" element={<SearchRecipe recipes={searchResults} />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}