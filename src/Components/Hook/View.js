import React, { Component } from 'react';
import Count from './Count';
import CountTitle from './CountTitle';
import CountWithHooks from './CountWithHooks';
import CountWithEffects from './CountTitleWithEffects';
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
        <CountTitle/>
        <CountWithHooks/>
        <CountWithEffects/>
        <WindowSize/>
        <WindowSizeWithHooks/>
      </div>
    );
  }
}

export default View;
