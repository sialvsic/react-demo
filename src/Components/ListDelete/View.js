import React from 'react';
import BadUser from './BadUser';
import GoodUser from './GoodUser';

class View extends React.Component {
  render() {
    return (
      <div>
        <h1>Bad Users</h1>
        <BadUser/>
        <h1>Good User</h1>
        <GoodUser/>
      </div>
    );
  }
}

export default View;
