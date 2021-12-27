import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/home';
import Favorites from 'pages/favorites';
import ErrorPage from 'pages/error';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/error-page">
          <ErrorPage />
        </Route>
    </Switch>
  )
}
export default Routes
