import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import './App.css';

export default function App() {
  const {categories, error,  fetchItems} = useApplicationData();

  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar />

        <Routes>
       
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/recipes" element={<CategoriesList categories={categories} />} />

        </Routes>
      
      </BrowserRouter>
      {/* <CategoriesList categories={categories}/> */}
      
    </div>
  );
}
