import React from 'react';
import avatar from '../../resources/avatar.jpg';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img onMouseMove={ (e) => {
        e.stopPropagation();
      } } src={ avatar } style={ { height: '100px', width: '100px', position: 'absolute', left: mouse.x, top: mouse.y } }/>
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
    event.stopPropagation();
  }

  render() {
    return (
      <div style={ { height: '500px', width: '1000px', position: 'relative' } } onMouseMove={ this.handleMouseMove }>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */ }
        { this.props.render(this.state) }
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={ mouse => (
          <Cat mouse={ mouse }/>
        ) }/>
      </div>
    );
  }
}

function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={ mouse => (
          <Component { ...this.props } mouse={ mouse }/>
        ) }/>
      );
    }
  };
}

export default withMouse(Cat);
// export default MouseTracker;
