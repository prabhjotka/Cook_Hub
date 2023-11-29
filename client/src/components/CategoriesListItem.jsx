import React from 'react';

function CategoriesListItem(props) {
console.log("in step2",props)
  return (
    <li>
      {props.category}
    </li>
  );
}

export default CategoriesListItem;