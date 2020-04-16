import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GrowPathPage from './components/GrowPathPage';
import SupportFigurePage from "./components/SupportFigurePage";

export default () => (
  <Route render={(routeProps => (
    <Switch>
      <Route path="/" component={GrowPathPage} exact />
      <Route path="/support-figure" component={SupportFigurePage} exact />
    </Switch>
  ))}/>
);
