import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/" component={App}>
    <Route exact component={HomePage}/>
  </Route>
);
