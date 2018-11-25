import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Components/Game/';
import Home from './Components/Home/';
import InlineInput from './Components/InlineInput/';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route path="/game" component={ Game }/>
          <Route path="/inlineInput" component={ InlineInput }/>
        </div>
      </Router>
    );
  }
}

export default App;
