import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddNewRecipe() {
  return (
    <div className="addRecipe">
      <Form.Label htmlFor="basic-url">Add a new recipe!</Form.Label>

      <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Recipe Title">
          <Form.Control as="textarea"/>
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="Recipe Category"
        >
          <Form.Select aria-label="Floating label select example">
            <option>Select category</option>
            <option value="1">Breakfast</option>
            <option value="2">Salads</option>
            <option value="3">Main Dishes</option>
            <option value="3">Desserts</option>
            <option value="3">Drinks</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" label="Recipe Title">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" placeholder="Ingredient List"rows={3} />
      </Form.Group>
      
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image Path</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Recipe</Form.Label>
        <Form.Control as="textarea" placeholder="Detailed recipe goes here" rows={3} />
      </Form.Group>

      <Button variant="outline-secondary" id="button-addon1">
        Submit
      </Button>
    </div>
  );
}

export default AddNewRecipe;