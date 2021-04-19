import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import List from './ListComponent';
import Recipe from './RecipeComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ () => <List />} />
          <Route path="/:id" component={ ({match}) => <Recipe id={match.params.id} /> } />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;