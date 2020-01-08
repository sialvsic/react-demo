import React, { Component } from "react";

import View from "./View";

class App extends Component {
  render() {
    const content = [
      {
        id: "A",
        render: () => {
          return (
            <div>
              <span>this is A</span>
            </div>
          );
        }
      },
      {
        id: "B",
        render: () => {
          return (
            <div>
              <span>this is B</span>
            </div>
          );
        }
      },
      {
        id: "C",
        render: () => {
          return (
            <div>
              <span>this is C</span>
            </div>
          );
        }
      },
      {
        id: "D",
        render: () => {
          return (
            <div>
              <span>this is D</span>
            </div>
          );
        }
      }
    ];

    //元素样式
    const style = {
      gap: 50,
      cardWidthRatio: 0.7,
      cardHeight: 200,
      cardTop: 50,
      border: "1px solid red",
      backgroundColor: "#fff",
      fontSize: "50px"
    };

    //容器样式
    const containerStyle = {
      // width: 600,
      height: 400
    };

    //中间元素样式
    const centerStyle = {
      // transform: "scale(1.1)",
      color: "blue",
      top: 20,
      height: 300
    };

    return (
      <div style={{ width: "75%", margin: "0 auto" }}>
        <View
          content={content}
          style={style}
          containerStyle={containerStyle}
          centerStyle={centerStyle}
        />
      </div>
    );
  }
}

export default App;
