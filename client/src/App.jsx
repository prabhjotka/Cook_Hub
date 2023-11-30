import {useState} from 'react';
import CategoriesList from './components/CategoriesList';

import useApplicationData from './hooks/useApplicationData';
import './App.css';

export default function App() {
  const [text, setText] = useState("");
  const {categories, error,  fetchItems} = useApplicationData();

  const addFriend = function() {
    addItem(text);
  };

  return (
    <div className="App">
      <h1>My Anything List</h1>
    
      <CategoriesList categories={categories}/>
      
    </div>
  );
}
