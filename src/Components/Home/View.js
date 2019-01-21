import React from 'react';
import { Link } from 'react-router-dom';

const View = () => {
  return (<div>
    <p>
      Home Page - Visit: <Link to="/">Home Page</Link>
    </p>
    <p>
      React Game - Visit: <Link to="/game">React Game</Link>
    </p>
    <p>
      Inline Edit Component - Visit: <Link to="/inline">Inline Edit Component</Link>
    </p>
    <p>
      key - Visit: <Link to="/key">Key</Link>
    </p>
    <p>
      Context - Visit: <Link to="/Context">Context</Link>
    </p>
  </div>);
};

export default View;
