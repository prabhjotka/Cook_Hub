import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/styles/addRecipe.css';

function AddNewRecipe(props) {
  const categories = props.categories || [];
 
  const [state, setState] = useState({
    name: "",
    category_id: "",
    ingredients_list: "",
    image_url: "",
    instructions: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'img' && files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setState((prevState) => ({ ...prevState, image_url: imageUrl }));
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit=function(e)
  {e.preventDefault();
    props.addItem(state.name,state.category_id,state.ingredients_list,state.image_url,state.instructions);
  }
  return (
    <div className="addRecipe">
      <h2 className="mb-4">Add a New Recipe!</h2>

      <Row className="mb-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Recipe Title">
            <Form.Control
              type="text"
              placeholder="Enter Recipe Title"
              name="recipeName"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}/>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Recipe Category">
            <Form.Select
              aria-label="Recipe Category"
              name="category"
              value={state.category_id}
              onChange={(e) => setState({ ...state, category_id: e.target.value })}>
              <option>Select category</option>
              {categories.map((category) => (
                <option key={category.id} 
                value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Ingredient List"
          rows={3}
          name="ingredients"
          value={state.ingredients_list}
          onChange={(e) => setState({ ...state, ingredients_list: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image Path</Form.Label>
        <InputGroup>
          <Form.Control
            type="file"
            placeholder="Enter Image Path"
            multiple accept='image/*'
            name="img"
           onChange={handleChange}
          />
         <Button variant="secondary" id="button-addon2"
          onClick={() => document.querySelector('[type=file]').click()}>
          Browse
      </Button>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRecipe">
        <Form.Label>Recipe</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter Detailed Recipe"
          rows={5}
          name="instructions"
          value={state.instructions}
          onChange={(e) => setState({ ...state, instructions: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" id="submitBtn" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default AddNewRecipe;
