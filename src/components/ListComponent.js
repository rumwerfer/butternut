import React, { Component } from 'react';
import Teaser from './TeaserComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class List extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
            <Teaser name="recipe 1" id={1} />
            <Teaser name="recipe 2" id={2} />
            <Teaser name="recipe 3" id={3} />
            <Teaser name="recipe 4" id={4} />
            <Teaser name="recipe 5" id={5} />
            <Teaser name="recipe 6" id={6} />
            <Teaser name="recipe 7" id={7} />
            <Teaser name="recipe 8" id={8} />
            <Teaser name="recipe 9" id={9} />
        </Row>
      </Container>
    );
  }
}

export default List;