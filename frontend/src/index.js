import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import Routing from './Routing'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="display-container">
      <div className="content-container">
        <Routing />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

//For testing purposes
reportWebVitals();
