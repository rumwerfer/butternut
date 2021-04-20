import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import List from './ListComponent';
import Recipe from './RecipeComponent';
import recipes from '../shared/recipes.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Header recipes={recipes} />
        <Switch>
          <Route exact path="/" component={ () => <List recipes={recipes} />} />
          <Route
            path="/:id"
            component={ ({match}) => <Recipe recipe={recipes[match.params.id]} /> }
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;