/**
 * Created by Konstantin on 18.05.2017.
 */
import React from 'react';
import { Route } from 'react-router';
import ContactPage from './contact';

export default (
  <Route>
      <Route component={ ContactPage } path={ ContactPage.path } />
  </Route>
);
