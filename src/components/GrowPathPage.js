import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/GrowPathPage.css';
import treeImage from "../images/tree.jpg";

export default () => {
  const history = useHistory();

  function handleSupportFiguresClick() {
    history.push('/support-figure');
  }
  return (
    <div className='block-container'>
      <div className='first-block'>
        <img className='treeImage' src={treeImage} alt='tree' />
      </div>
      <div className='second-block'>
        <h2>Welcome to SupportMe</h2>
        <p>To get started either find out what you want to achieve professionally or
            find more information about support figures</p>
      </div>
      <div className='third-block'>
        <button
          className="btn btn-default first-button"
          onClick={handleSupportFiguresClick}>Understand Support Figures</button>
        <button
          className="btn btn-default second-button">What do I need</button>
      </div>
    </div>
  );
}

