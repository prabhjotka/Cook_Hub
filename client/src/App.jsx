import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import AddNewRecipe from './components/AddNewRecipe';
import './App.css';


export default function App() {
  const {categories,  recipes,error,categoryRecipes,  fetchItems,getCategoryId} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar />
        <AddNewRecipe />
        <Routes>
{/*        
          <Route path="/" element={<Home />} /> */}
          <Route path="/categories" element={<CategoriesList categories={categories} getCategoryId={getCategoryId}/>} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/category/:categoryId" element={<CategorywiseRecipeList categoryRecipes={categoryRecipes} />}  />
        </Routes>
      
      </BrowserRouter>
     
      
    </div>
  );
}
