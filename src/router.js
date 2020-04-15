import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import SupportFigure from "./components/SupportFigure";

export default () => (
  <Route render={(routeProps => (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/support-figure" component={SupportFigure} exact />
    </Switch>
  ))}/>
);
