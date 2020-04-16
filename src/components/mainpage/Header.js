import React from "react";
import circleLogo from '../../images/circle.png';
import '../../styles/mainpage/Header.css';

export default () => {
  return (
    <header>
      <div>
        <h3>SupportMe</h3>
      </div>
      <div className='logo-container'>
        <img className='circleLogo' src={circleLogo} alt='logo' />
      </div>
    </header>
    );
  }



