import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/styles/addRecipe.css';
import { useNavigate } from 'react-router-dom';

function AddNewRecipe(props) {
  const categories = props.categories || [];
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    category_id: "",
    description: "",
    ingredients_list: "",
    nutritional_information: "",
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

  const handleSubmit = function(e) {
    e.preventDefault();

    if (
      !state.name ||
      !state.category_id ||
      !state.ingredients_list ||
      !state.image_url ||
      !state.instructions
    ) {

      alert('Please fill in all required fields');
      return;
    }
    props.addRecipe(
      state.name,
      state.description,
      state.instructions,
      state.nutritional_information,
      state.image_url,
      state.ingredients_list,
      state.category_id,

    );
    navigate('/recipes');
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
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })} />
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

      <Form.Group className="mb-3" controlId="formNutritionalValue">
        <Form.Label></Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter nutritional value of the recipe in the order as Calories, Carbs, Proteins:"
          rows={3}
          name="nutritional_information"
          value={state.nutritional_information}
          onChange={(e) => setState({
            ...state, nutritional_information: e.target.value
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label></Form.Label>
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
            Browse Image
          </Button>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRecipe">
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

      <Button variant="primary" id="submitBtn" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default AddNewRecipe;
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Col from 'react-bootstrap/Col';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import '../styles/styles/addRecipe.css';
// import { useNavigate } from 'react-router-dom';

// function AddNewRecipe(props) {
//   const categories = props.categories || [];
//   const navigate = useNavigate();
//   const [state, setState] = useState({
//     name: '',
//     category_id: '',
//     description: '',
//     ingredients_list: '',
//     nutritional_information: {
//       carbs: '',
//       calories: '',
//       protein: '',
//     },
//     image_url: '',
//     instructions: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'img' && files && files.length > 0) {
//       const imageUrl = URL.createObjectURL(files[0]);
//       setState((prevState) => ({ ...prevState, image_url: imageUrl }));
//     } else {
//       setState((prevState) => ({ ...prevState, [name]: value }));
//     }
//   };

//   const handleSubmit = function (e) {
//     e.preventDefault();

//     if (
//       !state.name ||
//       !state.category_id ||
//       !state.ingredients_list ||
//       !state.image_url ||
//       !state.instructions ||
//       !state.nutritional_information.carbs ||
//       !state.nutritional_information.calories ||
//       !state.nutritional_information.protein
//     ) {
//       alert('Please fill in all required fields');
//       return;
//     }

//     props.addRecipe({
//       name: state.name,
//       description: state.description,
//       instructions: state.instructions,
//       nutritional_information: {
//         carbs: state.nutritional_information.carbs,
//         calories: state.nutritional_information.calories,
//         protein: state.nutritional_information.protein,
//       },
//       image_url: state.image_url,
//       ingredients_list: state.ingredients_list,
//       category_id: state.category_id,
//     });

//     navigate('/recipes');
//   };

//   return (
//     <div className="addRecipe">
//       <h2 className="mb-4">Add a New Recipe!</h2>

//       <Row className="mb-3">
//         <Col md>
//           <FloatingLabel controlId="floatingInputGrid" label="Recipe Title">
//             <Form.Control
//               type="text"
//               placeholder="Enter Recipe Title"
//               name="name"
//               value={state.name}
//               onChange={(e) => setState({ ...state, name: e.target.value })}
//             />
//           </FloatingLabel>
//         </Col>
//         <Col md>
//           <FloatingLabel controlId="floatingSelectGrid" label="Recipe Category">
//             <Form.Select
//               aria-label="Recipe Category"
//               name="category_id"
//               value={state.category_id}
//               onChange={(e) => setState({ ...state, category_id: e.target.value })}
//             >
//               <option>Select category</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </Form.Select>
//           </FloatingLabel>
//         </Col>
//       </Row>

//       <Form.Group className="mb-3" controlId="formDescription">
//         <Form.Label>Description:</Form.Label>
//         <Form.Control
//           as="textarea"
//           placeholder="Enter a short description for the recipe"
//           rows={3}
//           name="description"
//           value={state.description}
//           onChange={(e) => setState({ ...state, description: e.target.value })}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formIngredients">
//         <Form.Label>Ingredients:</Form.Label>
//         <Form.Control
//           as="textarea"
//           placeholder="Enter Ingredient List"
//           rows={3}
//           name="ingredients_list"
//           value={state.ingredients_list}
//           onChange={(e) => setState({ ...state, ingredients_list: e.target.value })}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formNutritionalValue">
//         <Form.Label>Nutritional Information:</Form.Label>
//         <Form.Control
//           as="textarea"
//           placeholder="Enter nutritional value (Carbs, Calories, Proteins)"
//           rows={3}
//           name="nutritional_information"
//           value={`${state.nutritional_information.carbs} ${state.nutritional_information.calories} ${state.nutritional_information.protein}`}
//           onChange={(e) => {
//             const [carbs, calories, protein] = e.target.value.split(' ');
//             setState((prevState) => ({
//               ...prevState,
//               nutritional_information: {
//                 carbs,
//                 calories,
//                 protein,
//               },
//             }));
//           }}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formImage">
//         <Form.Label>Image:</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type="file"
//             placeholder="Enter Image Path"
//             multiple
//             accept="image/*"
//             name="img"
//             onChange={handleChange}
//           />
//           <Button variant="secondary" id="button-addon2" onClick={() => document.querySelector('[type=file]').click()}>
//             Browse Image
//           </Button>
//         </InputGroup>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formRecipe">
//         <Form.Label>Instructions:</Form.Label>
//         <Form.Control
//           as="textarea"
//           placeholder="Enter Detailed Recipe"
//           rows={5}
//           name="instructions"
//           value={state.instructions}
//           onChange={(e) => setState({ ...state, instructions: e.target.value })}
//         />
//       </Form.Group>

//       <Button variant="primary" id="submitBtn" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </div>
//   );
// }

// export default AddNewRecipe;
