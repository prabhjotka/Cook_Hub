import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/styles/category.css';
function CategoriesListItem(props) {
 const {id,name,image}=props.category
const handleClick=function(id)
{
  console.log("click here",{id});
}
  return (
  <Card style={{ width: '25rem' }} border="secondary">
<Card.Img variant="top" src={image}/>
      <Card.Body>
        <Button variant="primary" onClick={() => handleClick(id)}> 
         {name}</Button>
      </Card.Body>
    </Card>   
  

  );
}
export default CategoriesListItem;



      


    



