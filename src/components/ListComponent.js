import React, { Component } from 'react';
import Teaser from './TeaserComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import recipes from '../shared/recipes';

class List extends Component {

  componentDidMount() {
    document.title = 'Recipes | Butternut';
  }
  
  filterRecipes(filter = this.props.filter) {
    return filter
      ? recipes.filter(recipe => recipe.tags.includes(filter))
      : recipes;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {this.filterRecipes().map(
            recipe => <Teaser recipe={recipe} />
          )}
        </Row>
      </Container>
    );
  }
}

export default List;