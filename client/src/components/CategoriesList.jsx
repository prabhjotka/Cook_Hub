import React from 'react';
import CategoriesListItem from './CategoriesListItem';
import '../styles/styles/category.css'
function CategoriesList(props) {
  const categories = props.categories || [];

  const list = categories.map((category) => {
    return <CategoriesListItem
      key={category.id}
      category={category}
       />;
  });

  return (
   
<div className='category_card'>
  <div className='category'>  {list}</div> </div>

     
  );
}

export default CategoriesList;