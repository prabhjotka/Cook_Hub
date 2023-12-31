
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const NavBar = (props) => {
  const { user, logout } = useAuth();
  const [searchvalue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    props.searchRecipe(searchvalue);
  }

  const navigateTosearchPage = function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.searchRecipe(searchvalue);
      navigate(`/search`);
    }

  }
  const handleMenu = function() {
    setSearchValue('');
    formRef.current.reset();
  }
  return (
    <>
    
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">

      <div className="container">
      
      
     
        <Navbar.Brand as={Link} to="/">
        <img src="icons8-chef-hat-64.png"/> Cook Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleMenu}>
              Home
            </Nav.Link>

            {/* <NavDropdown title="Meals" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Breakfast</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
               Lunch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Appetizer and Snacks</NavDropdown.Item>
              <NavDropdown.Divider />
  
              <NavDropdown.Item href="#action/3.4">Desserts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Drinks
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link as={Link} to="/recipes" onClick={handleMenu}>
              All Recipes
            </Nav.Link>

            
{/* 
            <NavDropdown title="Ingredients" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Brown Rice</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">    
              Avocados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Corn Flour</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Chicken
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Oats
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/categories" onClick={handleMenu}>
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleMenu}>
              Login
            </Nav.Link>

            {user ? (
              <>
                <span className="nav-link">Welcome, {user.username}</span>
                <Nav.Link as={Link} to="/addRecipe" onClick={handleMenu}>
                  Add New Recipe
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              null
            )}


          </Nav>
          <Form className="d-flex" ref={formRef}>
            <Form.Control
              type="search"
              className="me-2"
              name="search"
              id="search"
              aria-label="Search"
              placeholder='Search recipe'
              onChange={handleChange}
              onKeyDown={navigateTosearchPage}
            />
          </Form>

        </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
};

export default NavBar;

