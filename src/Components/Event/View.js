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
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
  }

  componentDidMount() {
    document.addEventListener('click', this.click);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.click);
  }

  render() {
    return (
      <div onClick={ this.contentClick }>
        <p>this is a react event test</p>
        <button onClick={ this.buttonClick }>Click for test</button>
      </div>
    );
  }

}


export default View;
