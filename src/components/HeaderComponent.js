import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return (
      <Navbar expand="md" variant="dark" className="pt-0 bg-green">
        <div className="container">
          <Navbar.Brand>
            <h1 className="text">Butternut</h1>
            <p className="text text-small">simple vegan recipes</p>  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link>
                filters
              </Nav.Link>
              <Nav.Link>
                go
              </Nav.Link>
              <Nav.Link>
                here
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;

