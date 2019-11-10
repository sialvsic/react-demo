import React from "react";
import BScroll from "better-scroll";
import "./scroll.scss";

export default class Scroll extends React.Component {
  constructor() {
    super();
    this.pageIndex = 0;
    this.distance = 0;
    this.enableScrolling = true;
    this.items = [".item1", ".item2", ".item3"];
    this.queue = [];
  }
  componentDidMount() {}

  handleScroll(e) {

    if (this.enableScrolling) {
      let currentScreen = null;
      const wrapper = document.querySelector(".content");

      let nodeHeight = 0;
      let tempNodeHeight = 0;

      if (e.nativeEvent.deltaY <= 0) {
        /* scrolling up */
        if (this.pageIndex <= 0) {
          return;
        }

        this.pageIndex--;

        this.distance = this.distance + this.queue.pop();
      } else {
        if (this.pageIndex >= this.items.length - 1) {
          return;
        }

        currentScreen = document.querySelector(this.items[this.pageIndex]);
        nodeHeight = currentScreen.getBoundingClientRect().height;
        this.pageIndex++;

        if (this.pageIndex === this.items.length - 1) {
          tempNodeHeight = 400;
        } else {
          tempNodeHeight = nodeHeight;
        }

        this.distance = this.distance - tempNodeHeight;

        this.queue.push(tempNodeHeight);
      }

      this.enableScrolling = false;
      wrapper.style.transform = `translateY(${this.distance}px)`;
      setTimeout(() => {
        this.enableScrolling = true;
      }, 1500);
    }
  }

  render() {
    return (
      <div className="scroll-container">
        <header className="header" />
        <div className="wrapper">
          <ul className="content" onWheel={e => this.handleScroll(e)}>
            <li className="item1">item 1</li>
            <li className="item2">item 2</li>
            <li className="item3">item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
