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
   
    <div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="row row-cols-2 row-cols-md-2 g-4">
      {list}
    </div>
  </div>
     
  );
}

export default CategoriesList;