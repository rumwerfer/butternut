import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
  render() {
    return (
      <div>
        <h2> Recipe no. {this.props.id} </h2>
        <h3>Ingredients</h3>
        <p>...</p>
        <h3>Directions</h3>
        <p>...</p>
        <Link to='/'>back</Link>
      </div>
    );
  }
}

export default Recipe;