import React from 'react';

class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setWidth);
    document.title = `window width is ${ this.state.width } px`;
  }

  componentDidUpdate() {
    document.title = `window width is ${ this.state.width } px`;
  }

  setWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
  }

  render() {
    return (
      <div>
        <p>
          window width is
        </p>
        { this.state.width }
      </div>
    );
  }
}

export default WindowSize;
