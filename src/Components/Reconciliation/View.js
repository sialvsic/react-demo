import React from 'react';

class View extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    for (let i = 0; i < 9000; i++) {
      console.log(i);
    }
  }

  render() {
    return <div>this is a view</div>;
  }
}

export default View;
