import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from "./components/MainPage";
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
  <MainPage />,
  document.getElementById('root'),
);

serviceWorker.unregister();
