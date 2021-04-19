import React, { Component } from 'react';
import Teaser from './TeaserComponent';

class List extends Component {
  render() {
    return (
      <div>
        <Teaser name="recipe 1" id={1} />
        <Teaser name="recipe 2" id={2} />
      </div>
    );
  }
}

export default List;