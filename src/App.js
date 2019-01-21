import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Components/Game/';
import Home from './Components/Home/';
import Inline from './Components/inline-edit/';
import Key from './Components/Key/';
import Context from './Components/Context/';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={ true } path="/" component={ Home }/>
          <Route path="/game" component={ Game }/>
          <Route path="/inline" component={ Inline }/>
          <Route path="/key" component={ Key }/>
          <Route path="/Context" component={ Context }/>
        </div>
      </Router>
    );
  }
}

export default App;
