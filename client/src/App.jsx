import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import './App.css';

export default function App() {
  const {categories,  recipes,error,  fetchItems} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar />

        <Routes>
{/*        
          <Route path="/" element={<Home />} /> */}
          <Route path="/categories" element={<CategoriesList categories={categories} />} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        </Routes>
      
      </BrowserRouter>
     
      
    </div>
  );
}
