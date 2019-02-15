import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Components/Game/';
import Home from './Components/Home/';
import Inline from './Components/inline-edit/';
import Key from './Components/Key/';
import Context from './Components/Context/';
import ListDelete from './Components/ListDelete/';
import This from './Components/This/';
import Ref from './Components/Ref/';

import './app.css';

export const config = [
  {
    path: '/',
    component: Home,
    name: 'home',
    label: 'Home Page',
    text: 'Home Page',
    exact: true
  }, {
    path: '/game',
    component: Game,
    name: 'game',
    label: 'React Game',
    text: 'React Game',
    exact: false
  }, {
    path: '/inline',
    component: Inline,
    name: 'inline',
    label: 'Inline Edit',
    text: 'Inline Edit',
    exact: false
  }, {
    path: '/key',
    component: Key,
    name: 'key',
    label: 'Key',
    text: 'Key',
    exact: false
  },
  {
    path: '/context',
    component: Context,
    name: 'context',
    label: 'Context',
    text: 'Context',
    exact: false
  }, {
    path: '/list-delete',
    component: ListDelete,
    name: 'list',
    label: 'List Delete 优化',
    text: 'List Delete',
    exact: false
  }, {
    path: '/this',
    component: This,
    name: 'this',
    label: 'this 使用举例',
    text: 'this',
    exact: false
  },
  {
    path: '/ref',
    component: Ref,
    name: 'ref',
    label: 'ref 使用举例',
    text: 'ref',
    exact: false
  }];

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          {
            config.map((route) => {
              return <Route
                key={ route.name }
                exact={ route.exact }
                path={ route.path }
                component={ route.component }
              />;
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;
