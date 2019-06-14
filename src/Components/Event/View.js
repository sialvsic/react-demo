import React from 'react';

class View extends React.Component {

  click(e) {
    console.log('document fire click');
  }

  contentClick(e) {
    // console.log(e);
    console.log('parent click');
  }


  buttonClick(e) {
    console.log('child click');
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  componentDidMount() {
    document.addEventListener('click', this.click);
    document.querySelector('#parent').addEventListener('click', () => {
      console.log('parent1 click');
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.click);
  }

  render() {
    return (
      <div id='parent' onClick={ this.contentClick }>
        <p>this is a react event test</p>
        <button onClick={ this.buttonClick }>Click for test</button>
      </div>
    );
  }

}

export default View;


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('子元素的点击');
    e.nativeEvent.stopImmediatePropagation();
  }

  componentDidMount() {
    const parent = document.getElementById('parent');
    parent.addEventListener('click', function() {
      console.log('父元素上的点击');
    });
  }

  render() {

    return (
      <div id="parent">
        <div id="child" onClick={ this.onClick }>
          click me
        </div>
      </div>
    );
  }
}
