// import { useState } from 'react';
// import DataList from './components/DataList';
// import Status from './components/Status';
// import useApplicationData from './hooks/useApplicationData';
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import TopNavigationBar from './components/TopNavigationBar'; // Adjust the path as needed
import HomePage from './components/HomePage';

// export default function App() {
//   const [text, setText] = useState("");
//   const {status, error, data, addItem, deleteItem, fetchItems} = useApplicationData();

//   const addFriend = function() {
//     addItem(text);
//   };

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
        <TopNavigationBar />
        <HomePage />
        
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/all-recipes" component={AllRecipes} />
          <Route path="/favorite-recipes" component={FavoriteRecipes} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;