import React, { Component } from 'react';

class This extends Component {
  constructor(props) {
    super(props);
    this.name = 'This';
    this.handleClick4 = this.handleClick4.bind(this);
  }

  a() { //添加为一个实例方法
    console.log(this.name);
  }

  b = () => { //添加到原型链上的方法
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

export default This;
