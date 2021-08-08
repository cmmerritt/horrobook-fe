import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from '../books/BookList';
import BookDetail from '../details/BookDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/:id" component={BookDetail} />
      </Switch>
    </Router>
  );
}
