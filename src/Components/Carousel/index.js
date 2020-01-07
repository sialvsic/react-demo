import React, { Component } from "react";

import View from "./View";

class App extends Component {
  render() {
    const content = [
      { name: "A", id: "A" },
      { name: "B", id: "B" },
      { name: "C", id: "C" },
      { name: "D", id: "D" }
    ];

    //元素样式
    const style = {
      gap: 50,
      cardWidthRatio: 0.7,
      cardHeight: 200,
      cardTop: 50
    };

    //容器样式
    const containerStyle = {
      width: 500,
      height: 300
    };

    //中间元素样式
    const centerStyle = {};

    return (
      <View
        content={content}
        style={style}
        containerStyle={containerStyle}
        centerStyle={centerStyle}
      />
    );
  }
}

export default App;
