import React, { Component } from 'react';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = (count) => {
    this.setState({ count });
  };

  render() {

    let { count } = this.state;

    return (
      <div>
        <p>You clicked { count } times</p>
        <button onClick={ () => this.setCount(count + 1) }>
          Click me
        </button>
      </div>
    );
  }
}

export default View;
