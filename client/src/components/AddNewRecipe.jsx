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
    recipeName: "",
    category: "",
    ingredients: "",
    img: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

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
              value={state.recipeName}
              onChange={handleChange}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Recipe Category">
            <Form.Select
              aria-label="Recipe Category"
              name="category"
              value={state.category}
              onChange={handleChange}
            >
              <option>Select category</option>
              {categories.map((category) => (
                <option key={category.id} 
                value={category.name}>
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
          value={state.ingredients}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Image Path</Form.Label>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter Image Path"
            name="img"
            value={state.img}
            onChange={handleChange}
          />
          <Button variant="secondary" id="button-addon2">
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
          name="details"
          value={state.details}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" id="submitBtn">
        Submit
      </Button>
    </div>
  );
}

export default AddNewRecipe;
