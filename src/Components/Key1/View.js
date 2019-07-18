import React, { Component } from 'react';

function Map() {
  return (
    <ul>
      {
        [1, 1, 2, 2].map((val) => <li key={ val }>{val}</li>)
      }
    </ul>
  );
}

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    value: 0,
  };

  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props.name);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        value: this.state.value + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('componentWillUnmount');
    console.log(this.props.name);
  }

  render() {
    return (
      <div>{this.state.value}</div>
    );
  }
}

function Demo(props) {
  return props.flag ? (<div><Counter name={ 1 }/></div>) : (<span><Counter name={ 2 }/></span>);
}

class View extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    flag: false,
  };

  render() {
    return (
      <div>
        <Demo flag={ this.state.flag }/>
        <button
          onClick={ () => {
            this.setState({
              flag: !this.state.flag,
            });
          } }
        >
          Click
        </button>
        <Map/>
      </div>
    );
  }
}

export default View;
