/**
 * Created by Konstantin on 18.05.2017.
 */
import React from 'react';
import { Route } from 'react-router';
import HomePage from './home';

export default (
  <Route>
      <Route component={ HomePage } path={ HomePage.path } />
  </Route>
);
