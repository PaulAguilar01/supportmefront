import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/mainpage/Menu.css';

export default () => {
  const activeStyle = {color:"#11aa58"};

  return (
    <nav id="page-nav">
      <input type="checkbox" id="hamburger"/>
      <label htmlFor="hamburger">&#9776;</label>
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeStyle} exact>Growth path</NavLink>
        </li>
        <li>
          <NavLink to="/support-figure" activeStyle={activeStyle} >Support figures</NavLink>
        </li>
      </ul>
    </nav>
  );
}
