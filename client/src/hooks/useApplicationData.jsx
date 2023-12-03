import axios from "axios";
import {useCallback, useEffect, useState} from "react";

const useApplicationData = function() {
  const [error, setError] = useState();
  const [recipes, setRecipes] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoryRecipes, setCategoryRecipes] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  

  const fetchItems = useCallback(() => {
    Promise.all([axios.get('/api/categories'),
     axios.get('/api/recipes'), 
    ])
      .then(all => {
        setCategories(all[0].data);
        setRecipes(all[1].data); 
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  // Fetch data on first render
  useEffect(() => {
    fetchItems();
  }, []);

const getCategoryId=function(id)
{
  axios.get(`/api/recipes/${id}`)
  .then(res => {
    setCategoryRecipes(res.data);
    
  })
  .catch((err) => {
    setError("hello",err.message);
  });
  
}

const searchRecipe = function (name) {
  axios.get(`/api/recipes/search_recipe?search=${name}`)
    .then(res => {
      setSearchResults(res.data);
    })
    .catch((err) => {
      setError("hello", err.message);
    });
}

  const addItem = function(name,category_id,ingredients_list,image_url,instructions) {
    axios.post("/api/recipes", {name,category_id,ingredients_list,image_url,instructions})
      .then(res => {
        console.log(res.data);
        setData([res.data, ...data]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // const deleteItem = function(id) {
  //   axios.delete(`/api/items/${id}`)
  //     .then(res => {
  //       setData(data.filter(item => item.id !== id));
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });

  //   setData(data.filter(item => item.id !== id));
  // };
 
  return { error, categories,recipes,categoryRecipes,searchResults,searchRecipe, fetchItems,getCategoryId,addItem};
};

export default useApplicationData;