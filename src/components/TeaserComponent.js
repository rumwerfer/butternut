import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Teaser extends Component {
  render() {
    return (
      <Link to={ `/${this.props.id}` }>
        <p>
          {this.props.name}
        </p>
      </Link>
    );
  }
}

export default Teaser;