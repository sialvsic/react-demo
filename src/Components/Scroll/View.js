import React from "react";
import "./scroll.scss";

export default class Scroll extends React.Component {
  constructor() {
    super();
    this.pageIndex = 0;
    this.distance = 0;
    this.enableScrolling = true;
    this.items = [".item1", ".item2", ".item3"];
    this.queue = [];
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
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

  onTouchMove(e) {
    console.log("onTouchMove");

    this.moveEndX = e.changedTouches[0].pageX;
    this.moveEndY = e.changedTouches[0].pageY;

    let X = this.moveEndX - this.startX;
    let Y = this.moveEndY - this.startY;

    console.log(this.enableScrolling);

    if (this.enableScrolling) {
      let currentScreen = null;
      const wrapper = document.querySelector(".content");

      let nodeHeight = 0;
      let tempNodeHeight = 0;

      if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        /* scrolling up */
        if (this.pageIndex <= 0) {
          return;
        }

        this.pageIndex--;

        this.distance = this.distance + this.queue.pop();
      } else {
        /* scrolling down */
        if (this.pageIndex >= this.items.length - 1) {
          return;
        }

        currentScreen = document.querySelector(this.items[this.pageIndex]);
        nodeHeight = currentScreen.getBoundingClientRect().height;
        this.pageIndex++;

        if (this.pageIndex === this.items.length - 1) {
          let lastHeight =
            document.querySelector(".content").getBoundingClientRect().height -
            window.innerHeight +
            80;

          if (lastHeight >= Math.abs(this.distance)) {
            //剩余距离还有xx
            tempNodeHeight = lastHeight - Math.abs(this.distance);
          } else {
            tempNodeHeight = 0;
          }
        } else {
          tempNodeHeight = nodeHeight;
        }

        this.distance = this.distance - tempNodeHeight;
        this.queue.push(tempNodeHeight);
      }

      console.log(this.distance);

      this.enableScrolling = false;
      wrapper.style.transform = `translateY(${this.distance}px)`;
      setTimeout(() => {
        this.enableScrolling = true;
      }, 1000);
    }
  }

  onTouchStart(ev) {
    console.log("onTouchStart");
    console.log(this);

    this.startX = ev.touches[0].pageX;
    this.startY = ev.touches[0].pageY;

    console.log(this.startX);
    console.log(this.startY);
  }

  render() {
    return (
      <div className="scroll-container">
        <header className="header" />
        <div className="wrapper">
          <ul
            className="content"
            onWheel={e => this.handleScroll(e)}
            onTouchStart={e => this.onTouchStart(e)}
            onTouchMove={e => this.onTouchMove(e)}
          >
            <li className="item1">item 1</li>
            <li className="item2">item 2</li>
            <li className="item3">item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

// if (Math.abs(X) > Math.abs(Y) && X > 0) {
//   console.log("向右");
// } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
//   console.log("向左");
// } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
//   console.log("向下");
// } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
//   console.log("向上");
// } else {
//   console.log("没滑动");
// }
