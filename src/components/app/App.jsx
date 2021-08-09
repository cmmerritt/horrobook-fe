import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../forms/Form';
import FavoriteList from '../favorites/FavoriteList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/favorites" component={FavoriteList} />
      </Switch>
    </Router>
  );
}
