import React, { Component } from 'react';
import Teaser from './TeaserComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class List extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
            {this.props.recipes.map(
              recipe => <Teaser recipe={recipe} />
            )}
        </Row>
      </Container>
    );
  }
}

export default List;