import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

//For Hot Module Replacement work in development
if (module.hot) {
  module.hot.accept();
}
