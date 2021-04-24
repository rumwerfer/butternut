import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Recipe extends Component {

  componentDidMount() {
    document.title = this.props.recipe.name + ' | Butternut';
  }

  render() {
    const recipe = this.props.recipe;

    return (
      <Container>
        <Row className="mt-3">
          <Col xs={9} sm={11}>
            <h2 className="text text-recipe-heading">{recipe.name}</h2>
          </Col>
          <Col xs={1}>
            <Link to='/'>
              <FontAwesomeIcon icon={faTimes} color="black"/>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h3 className="text text-recipe-subheading">Ingredients</h3>
            <ListGroup>
              {recipe.ingredients.map(item =>
                <ListGroup.Item>{item}</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col xs={12} sm={6}>
            <h3 className="text text-recipe-subheading">Directions</h3>
            <ListGroup variant="flush">
              {recipe.directions.map(item =>
                <ListGroup.Item>{item}</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-3 justify-content-center tags">
          {recipe.tags.sort().map(
            tag => <Badge pill className="text text-tag text-tag-big">{tag}</Badge>
          )}
        </Row>
        <Row className="mt-3">
          <Col xs={12} lg={{span: 10, offset: 1}} xl={{span: 8, offset: 2}}>
            <Image src={process.env.PUBLIC_URL + "/assets/images/" + recipe.id + ".jpg"} fluid rounded />
            <p><small>
              Image: <a href={recipe.imgSource} target="_blank" rel="noreferrer">{recipe.imgAuthor}</a> ({recipe.imgLicense})
            </small></p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipe;