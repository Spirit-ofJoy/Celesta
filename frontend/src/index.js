import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import Routing from './Routing'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="display-container">
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      
      <div className="content-container">
        <Routing />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

//For testing purposes
reportWebVitals();
