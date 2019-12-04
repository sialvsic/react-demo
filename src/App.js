import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './Components/Game/';
import Home from './Components/Home/';
import Inline from './Components/inline-edit/';
import Key from './Components/Key/';
import Key1 from './Components/Key1/';
import Context from './Components/Context/';
import ListDelete from './Components/ListDelete/';
import This from './Components/This/';
import Ref from './Components/Ref/';
import RenderProps from './Components/RenderProps/';
import Hooks from './Components/Hook/';
import Event from './Components/Event/';
import ScreenSelector from './Components/ScreenSelector/';
import Intersect from './Components/Intersect/';
import Hoc from './Components/Hoc/';
import Reconciliation from './Components/Reconciliation/';
import Scroll from './Components/Scroll/';
import DynamicImport from './Components/DynamicImport/';

import './app.css';

export const config = [
  {
    path: '/',
    component: Home,
    name: 'home',
    label: 'Home Page',
    text: 'Home Page',
    exact: true,
  }, {
    path: '/game',
    component: Game,
    name: 'game',
    label: 'React Game',
    text: 'React Game',
    exact: false,
  }, {
    path: '/inline',
    component: Inline,
    name: 'inline',
    label: 'Inline Edit',
    text: 'Inline Edit',
    exact: false,
  }, {
    path: '/key',
    component: Key,
    name: 'key',
    label: 'Key',
    text: 'Key',
    exact: false,
  },{
    path: '/key1',
    component: Key1,
    name: 'key1',
    label: 'Key1',
    text: 'Key1',
    exact: false,
  },
  {
    path: '/context',
    component: Context,
    name: 'context',
    label: 'Context',
    text: 'Context',
    exact: false,
  }, {
    path: '/list-delete',
    component: ListDelete,
    name: 'list',
    label: 'List Delete 优化',
    text: 'List Delete',
    exact: false,
  }, {
    path: '/this',
    component: This,
    name: 'this',
    label: 'this 使用举例',
    text: 'this',
    exact: false,
  },
  {
    path: '/ref',
    component: Ref,
    name: 'ref',
    label: 'ref 使用举例',
    text: 'ref',
    exact: false,
  },
  {
    path: '/render-props',
    component: RenderProps,
    name: 'render props',
    label: 'render props使用举例',
    text: 'render props',
    exact: false,
  },
  {
    path: '/hooks',
    component: Hooks,
    name: 'hooks',
    label: 'hooks 使用举例',
    text: 'hooks',
    exact: false,
  },
  {
    path: '/event',
    component: Event,
    name: 'event',
    label: 'event 使用举例',
    text: 'event',
    exact: false,
  },
  {
    path: '/screen-selector',
    component: ScreenSelector,
    name: 'screenSelector',
    label: 'screenSelector 使用举例',
    text: 'screen Selector',
    exact: false,
  },
  {
    path: '/intersect',
    component: Intersect,
    name: 'Intersect',
    label: 'Intersect 使用举例',
    text: 'Intersect by react hook',
    exact: false,
  },
  {
    path: '/hoc',
    component: Hoc,
    name: 'Hoc',
    label: 'Hoc 使用举例',
    text: 'Hoc by react hook',
    exact: false,
  },
  {
    path: '/reconciliation',
    component: Reconciliation,
    name: 'Reconciliation',
    label: 'Reconciliation 使用举例',
    text: 'Reconciliation',
    exact: false,
  },
  {
    path: '/scroll',
    component: Scroll,
    name: 'scroll',
    label: 'scroll 使用举例',
    text: 'scroll',
    exact: false,
  },
  {
    path: '/dynamic',
    component: DynamicImport,
    name: 'dynamic',
    label: 'DynamicImport 使用举例',
    text: 'dynamic',
    exact: false,
  },
];

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    );
  }
}

export default App;
