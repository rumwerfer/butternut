import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class Teaser extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <Col sm={12} md={6} xl={4} className="mt-2 mb-2">
        <Card className="teaser">
          <Link to={ `/r/${recipe.id}` } className="text-teaser">
            <Row>
              <Card.Img
                src={"../assets/images/" + recipe.id + ".jpg"}
                className="img-teaser"
              />
              <Card.Body class="teaser-body">
                <h2 className="text text-teaser-heading">{recipe.name}</h2>
                <div className="tags">
                  {recipe.tags.sort().map(
                    tag => <Badge pill className="text text-tag text-tag-small">{tag}</Badge>
                  )}
                </div>
              </Card.Body>
            </Row>
          </Link>
        </Card>
      </Col>
    );
  }
}

export default Teaser;