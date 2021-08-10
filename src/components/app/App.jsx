import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../forms/Form';
import FavoriteList from '../favorites/FavoriteList';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/favorites" component={FavoriteList} />
      </Switch>
    </>
  );
}
