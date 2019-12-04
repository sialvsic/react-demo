import React, { Component, Suspense } from "react";

const OtherComponent = React.lazy(() => import("./InnerComponent"));

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  buttonClick = () => {
    this.setState({
      open: true
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>load component</button>
        {this.state.open && (
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        )}
      </div>
    );
  }
}
