import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./mainpage/Header";
import Menu from "./mainpage/Menu";
import Router from '../router';
import '../styles/MainPage.css';

export default () => {
  return (
    <div>
      <Header />
      <div className='principal-container'>
        <BrowserRouter>
          <Menu />
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}
