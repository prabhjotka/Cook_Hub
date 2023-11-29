import React from 'react';
import CategoriesListItem from './CategoriesListItem';

function CategoriesList(props) {
  const categories = props.categories || [];

 console.log("in step1",categories)
  

  const list = categories.map((category) => {
    return <CategoriesListItem
      key={category.id}
      category={category}
    //   onClick={() => removeItem(item.id)}
       />;
  });

  return (
    <ul>{list}</ul>
  );
}

export default CategoriesList;