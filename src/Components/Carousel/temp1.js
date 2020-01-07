import React from "react";

import { Component, createRef } from "react";
import noop from "lodash/noop";
import cloneDeep from "lodash/cloneDeep";
import { animate } from "./animate";
import "./style.scss";

/**
 * Discover页面，轮播图组件（Pc端）
 */

const defaultBannerConfig = [
  {
    width: 100,
    height: 100,
    top: 120,
    left: 0,
    opacity: 0.8,
    zIndex: 3,
    color: "#fff",
    background: "red"
  },
  {
    width: 100,
    height: 100,
    top: 120,
    left: 120,
    opacity: 0.8,
    zIndex: 3,
    color: "#fff",
    background: "green"
  },
  {
    width: 100,
    height: 100,
    top: 100,
    left: 240,
    opacity: 1,
    zIndex: 4,
    color: "#fff",
    background: "#ffee00"
  },
  {
    width: 100,
    height: 100,
    top: 120,
    left: 360,
    opacity: 0.8,
    zIndex: 3,
    color: "#fff",
    background: "orange"
  },
  {
    width: 100,
    height: 100,
    top: 120,
    left: 480,
    opacity: 0.8,
    zIndex: 3,
    color: "#fff",
    background: "blue"
  }
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerConfig: props.bannerConfig || defaultBannerConfig
    };
    this.swiperWrap = createRef();
    this.swiperContainer = createRef();
    this.swiperBtnGroup = createRef();

    //TODO concat？？
    this.contentList = [].concat(cloneDeep(props.contentList));

    this.style = defaultBannerConfig;

    //当前位置
    this.current = 0; //5循环

    //轮转位置
    this.order = 1; //3循环

    //初始化两侧
    const item = Object.assign({}, props.contentList[2], { id: "D" });
    const item1 = Object.assign({}, props.contentList[0], { id: "E" });

    this.contentList.unshift(item);
    this.contentList.push(item1);
  }

  componentDidMount() {
    const { bannerConfig } = this.state;
    // 自动轮播
    // if (bannerConfig) {
    //   this.timer = setInterval(() => {
    //     this.handleRight();
    //   }, 5000);
    // }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.setState = noop;
  }

  /**
   * 执行banner动画
   * @param {*} bannerConfig
   */
  renderBanner(bannerConfig) {
    const container = this.swiperContainer && this.swiperContainer.current;

    if (!container) {
      return;
    }

    for (let i = 0, length = container.children.length; i < length; i++) {
      let li = container.children[i];
      animate(li, bannerConfig[i]);
    }
  }

  /**
   * 显示左右箭头
   */
  handleMouseEnter = () => {
    animate(this.swiperBtnGroup.current, { opacity: 1 });
    clearInterval(this.timer);
  };

  /**
   * 隐藏左右箭头
   */
  handleMouseLeave = () => {
    // animate(this.swiperBtnGroup.current, { opacity: 0 });
    // this.timer = setInterval(() => {
    //   this.handleRight();
    // }, 5000);
  };

  /**
   * 向左旋转
   */
  handleLeft = () => {
    const { bannerConfig } = this.state;

    //样式修改
    const newConfig = [].concat(bannerConfig);
    newConfig.unshift(newConfig.pop());

    // this.current--;
    // if (this.current < 0) {
    //   this.current = 4;
    // }

    // if (this.order < 0) {
    //   this.order = 2;
    // }

    // this.order = this.order % this.props.contentList.length;

    //DOM更改
    this.contentList[this.current].name = this.props.contentList[
      this.order
    ].name;

    this.current++;
    this.current = this.current % 5;

    this.order++;
    this.order = this.order % 3;

    this.setState({
      bannerConfig: newConfig
    });
    this.renderBanner(newConfig);
  };

  /**
   * 向右旋转
   */
  handleRight = () => {
    const { bannerConfig } = this.state;

    //样式更改
    const newConfig = [].concat(bannerConfig);
    const item = newConfig.shift();
    newConfig.push(item);

    //DOM更改
    this.contentList[
      this.contentList.length - 1 - this.current
    ].name = this.props.contentList[this.order].name;

    this.current++;
    this.current = this.current % 5;

    this.order--;
    // this.order = this.order % this.props.contentList.length;
    if (this.order < 0) {
      this.order = 2;
    }

    this.setState({
      bannerConfig: newConfig
    });

    this.renderBanner(newConfig);
  };

  render() {
    console.log(this.contentList);
    let list = this.contentList.map((item, index) => {
      item.style = Object.assign({}, this.style[index]);

      for (let key in item.style) {
        if (["width", "top", "left"].includes(key)) {
          item.style[key] = item.style[key] + "px";
        }
      }

      return item;
    });

    console.log(list);

    console.log(this.current);
    console.log(this.order);
    return (
      <div className="banner-pc">
        <div
          className="slide"
          ref={this.swiperWrap}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ul ref={this.swiperContainer}>
            {list.map((item, index) => {
              console.log(item);
              return (
                <li className="banner-item" style={item.style} key={item.id}>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
          <div className="btn-group" ref={this.swiperBtnGroup}>
            <div className="left-btn" onClick={this.handleLeft}>
              <span>left</span>
            </div>
            <div className="right-btn" onClick={this.handleRight}>
              <span>right</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const View = () => {
  const contentList = [
    { name: "B", id: "B" },
    { name: "C", id: "C" },
    { name: "A", id: "A" }
    // { name: "D", id: "D" },
    // { name: "E", id: "E" }
  ];

  return (
    <div>
      <Carousel contentList={contentList} style={undefined} />
    </div>
  );
};

export default View;
