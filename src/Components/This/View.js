import React, { Component } from 'react';

class ArrayKey extends Component {
  constructor(props) {
    super(props);
    this.name = 'ArrayKey';
    this.handleClick4 = this.handleClick4.bind(this);
  }

  a() {
    console.log(this.name);
  }

  b = () => {
    console.log(this.name);
  };

  handleClick1() {
    console.log(this.name);
  };

  handleClick2() {
    console.log(this.name);
  };

  handleClick3 = () => {
    console.log(this.name);
  };

  handleClick4() {
    console.log(this.name);
  };

  handleClick5() {
    console.log(this.name);
  };

  render() {
    return (
      <div>
        <button onClick={ this.handleClick1 }>Click Me1!!</button>
        <button onClick={ this.handleClick2.bind(this) }>Click Me2!!</button>
        <button onClick={ this.handleClick3 }>Click Me3!!</button>
        <button onClick={ this.handleClick4 }>Click Me4!!</button>
        <button onClick={ ()=>{ this.handleClick5() } }>Click Me5!!</button>
      </div>
    );
  }
}


export default ArrayKey;
