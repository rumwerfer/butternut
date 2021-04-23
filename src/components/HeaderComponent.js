import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {

    // gather tags from all recipes
    let allTags = new Set();
    this.props.recipes.map(recipe => recipe.tags.map(tag => allTags.add(tag)));
    let tags = new Array(...allTags).sort();

    return (
      <Navbar expand="md" variant="dark" className="pt-0 bg-green">
        <div className="container">
          <Navbar.Brand onClick={() => this.props.setFilter(null)} className="link">
            <h1 className="text text-header">Butternut</h1>
            <p className="text text-header text-small">simple vegan recipes</p>  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto" activeKey={this.props.filter}>
              {tags.map(tag =>
                <Nav.Item>
                  <Nav.Link eventKey={tag} onSelect={() => this.props.setFilter(tag)}>
                    {tag}
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;

