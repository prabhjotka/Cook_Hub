
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate=useNavigate();
  const handleChange = (event) => {
   
   props.searchRecipe(event.target.value);
  };
  const navigateTosearchPage=function(event)
  {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.searchRecipe(event.target.value);
      navigate(`/recipes`)
    }
  

  }
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">

      <div className="container">
        <Navbar.Brand as={Link} to="/">
          Cook Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              All Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/categories">
              All Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="me-2"
              name="search"
              id="search"
              aria-label="Search"
              onChange={handleChange}
              onKeyDown={navigateTosearchPage}
            />
            </Form>
  
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;

