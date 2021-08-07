import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from '../books/BookList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
      </Switch>
    </Router>
  );
}
