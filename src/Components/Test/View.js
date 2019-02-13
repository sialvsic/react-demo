import React, { Component } from 'react';
import { addSymbol, removeSymbol } from '../../utils';

class Test extends Component {

  isUpdate;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setSymbol();
  }

  setSymbol() {
    if(this.isUpdate) {
      addSymbol('aaa');
    } else {
      removeSymbol('bbb');
    }
  }

  componentWillUpdate(nextProps) {
    console.log('@@@');
    if(this.props.name !== nextProps.name) {
      console.log('run here');
      this.isUpdate = true;
    }
  }

  componentDidUpdate() {
    console.log('***');
    this.setSymbol();
  }

  render() {
    return (
      <div>
        this is test file
      </div>
    );
  }
}

export default Test;
