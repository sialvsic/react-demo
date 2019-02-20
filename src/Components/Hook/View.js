import React, { Component } from 'react';
import Count from './Count';
import CountWithHooks from './CountWithHooks';
import CountTitle from './CountTitle';

import CountTitleWithEffects from './CountTitleWithEffects';
import WindowSize from './WindowSize';
import WindowSizeWithHooks from './WindowSizeWithHooks';

class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Count/>
        <CountWithHooks/>
        <CountTitle/>
        <CountTitleWithEffects/>
        <WindowSize/>
        <WindowSizeWithHooks/>
      </div>
    );
  }
}

export default View;
