import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';

export default () => (
  <Route render={(routeProps => (
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  ))}/>
);
