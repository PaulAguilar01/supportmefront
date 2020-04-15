import React from 'react';
import '../styles/MainPage.css';

import Header from "./template/DefaultHeader";
import Menu from "./template/DefaultMenu";

export default () => {
  return (
    <div className="Main-page">
      <Header />
      <Menu />
        <div className="App-header">
          Hi Hanabi Team
          2020 - TW
        </div>
    </div>
  );
}

