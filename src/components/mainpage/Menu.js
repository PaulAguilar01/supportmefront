import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/mainpage/Menu.css';

export default () => {
  const activeStyle = {color:"#3CB371"};

  return (
    <div className='menu-container'>
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeStyle} exact>Growth path</NavLink>
        </li>
        <li>
          <NavLink to="/support-figure" activeStyle={activeStyle} >Support figures</NavLink>
        </li>
      </ul>
    </div>
  );
}
