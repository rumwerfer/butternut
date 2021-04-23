import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import List from './ListComponent';
import Recipe from './RecipeComponent';
import recipes from '../shared/recipes.js';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(tag) {
    this.setState({
      filter: tag
    });
  }

  render() {
    return (
      <div>
        <Header recipes={recipes} setFilter={this.setFilter} />
        <Switch>
          <Route
            exact path="/"
            component={ () => <List recipes={recipes} filter={this.state.filter} />}
          />
          <Route
            path="/r/:id"
            component={ ({match}) => <Recipe recipe={recipes[match.params.id]} /> }
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;