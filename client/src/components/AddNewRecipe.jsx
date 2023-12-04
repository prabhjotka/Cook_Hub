
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/styles/addRecipe.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function AddNewRecipe(props) {
  const { user } = useAuth();
  const categories = props.categories || [];
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    category_id: "",
    description: "",
    ingredients_list: "",
    image_url: "",
    instructions: "",
    calories: "",
    protein: "",
    carbs: "",
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

  const handleSubmit = function(e) {
    e.preventDefault();

    if (
      !state.name ||
      !state.category_id ||
      !state.ingredients_list ||
      !state.image_url ||
      !state.instructions ||
      !state.calories ||
      !state.protein ||
      !state.carbs
    ) {
      alert('Please fill in all required fields');
      return;
    }

    props.addRecipe(
      state.name,
      state.description,
      state.instructions,
      state.calories,
      state.protein,
      state.carbs,
      state.image_url,
      state.ingredients_list,
      state.category_id,
    );

    navigate('/recipes');
  };

  return (
    <div className="addRecipe">
      <h2 className="mb-4">Add a New Recipe!</h2>
      {user ? (
        <>
          <Row className="mb-3">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Recipe Title">
                <Form.Control
                  type="text"
                  placeholder="Enter Recipe Title"
                  name="recipeName"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Recipe Category">
                <Form.Select
                  aria-label="Recipe Category"
                  name="category"
                  value={state.category_id}
                  onChange={(e) => setState({ ...state, category_id: e.target.value })}
                >
                  <option>Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter a short description for the recipe"
              rows={3}
              name="description"
              value={state.description}
              onChange={(e) => setState({ ...state, description: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formIngredients">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Ingredient List"
              rows={3}
              name="ingredients"
              value={state.ingredients_list}
              onChange={(e) => setState({ ...state, ingredients_list: e.target.value })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <FloatingLabel controlId="floatingCalories" label="Calories">
                <Form.Control
                  type="number"
                  placeholder="Calories"
                  name="calories"
                  value={state.calories}
                  onChange={(e) => setState({ ...state, calories: e.target.value })}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingProtein" label="Protein">
                <Form.Control
                  type="number"
                  placeholder="Protein"
                  name="protein"
                  value={state.protein}
                  onChange={(e) => setState({ ...state, protein: e.target.value })}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingCarbs" label="Carbs">
                <Form.Control
                  type="number"
                  placeholder="Carbs"
                  name="carbs"
                  value={state.carbs}
                  onChange={(e) => setState({ ...state, carbs: e.target.value })}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label></Form.Label>
            <InputGroup>
              <Form.Control
                type="file"
                placeholder="Enter Image Path"
                multiple
                accept="image/*"
                name="img"
                onChange={handleChange}
              />
              <Button
                variant="secondary"
                id="button-addon2"
                onClick={() => document.querySelector('[type=file]').click()}
              >
                Browse Image
              </Button>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formInstructions">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Detailed Recipe"
              rows={5}
              name="instructions"
              value={state.instructions}
              onChange={(e) => setState({ ...state, instructions: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRecipe">
            <Form.Label></Form.Label>
            <Button variant="success" id="submitBtn" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Group>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default AddNewRecipe;

