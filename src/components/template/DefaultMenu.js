import React from "react";
import {NavLink} from "react-router-dom";


export default () => {
  const activeStyle = {color:"red"}
  return (
          <div>
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
