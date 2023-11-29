import axios from "axios";
import {useCallback, useEffect, useState} from "react";

const useApplicationData = function() {
  const [error, setError] = useState();
  const [recipes, setSRecipes] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchItems = useCallback(() => {
    Promise.all([axios.get('/api/categories'), axios.get('/api/recipes')])
      .then(all => {
        setCategories(all[0].data);
       // setData(all[1].data);
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


  // const addItem = function(name) {
  //   axios.post("/api/items", {name})
  //     .then(res => {
  //       console.log(res.data);
  //       setData([res.data, ...data]);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // };

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

  return { error, categories, fetchItems};
};

export default useApplicationData;