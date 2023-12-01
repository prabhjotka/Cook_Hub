import {useState} from 'react';
import CategoriesList from './components/CategoriesList';
import RecipeList from './components/RecipeList';
import CategorywiseRecipeList from './components/CategorywiseRecipeList';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import NavBar from './components/NavBar';
import './App.css';


export default function App() {
  const {categories,  recipes,error,categoryRecipes,  fetchItems,getCategoryId} = useApplicationData();

//   return (
//     <div className="App">
//       <h1>My Anything List</h1>

//       <Status status={status} error={error} />

//       <button onClick={fetchItems}>Reload</button>
//       <input type="text" value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={addFriend}>Add</button>

//       <DataList friends={data} deleteItem={deleteItem} />
//     </div>
//   );
const AllRecipes = () => <div>All Recipes Page Content</div>;
const FavoriteRecipes = () => <div>Favorite Recipes Page Content</div>;

const App = () => {
  return (
    <div className="App">
    
    <BrowserRouter>
        <NavBar />

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
};

export default App;