import React from 'react';
import '../styles/styles/category.css';
function CategoriesListItem(props) {
 const {id,name,image}=props.category
const handleClick=function(id)
{
  console.log("click here",{id});
}
  return (
<>

<div className="col">
      <div className="card border-light mb-3">
        <img src={image} className="card-img-bottom" alt="..." />
        <div className="card-body">
        <button type="button" className="btn btn-info" onClick={() => handleClick(id)}>  {name}</button>
          
          
        </div>
      </div>
    </div>
  </>
  );
}
export default CategoriesListItem;



      


    



