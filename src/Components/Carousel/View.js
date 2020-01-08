import React from "react";

import { Component, createRef } from "react";
import noop from "lodash/noop";
import cloneDeep from "lodash/cloneDeep";
import { animate } from "./animate";
import "./style.scss";
import { double, calcStyle, turnRight, shouldShow } from "./utils";

/**
 * 轮播图组件(左右滑动版本)
 */
const roundItems = 5;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.swiperWrap = createRef();
    this.swiperContainer = createRef();
    this.swiperBtnGroup = createRef();

    //初始化内容列表
    this.content = [].concat(cloneDeep(props.content));
    this.style = props.style;

    //初始化两侧数据
    if (this.content.length < roundItems) {
      this.content = double(this.content);
    }

    this.totalLength = this.content.length;
    if (this.totalLength > roundItems) {
      this.style = calcStyle(this.style, this.totalLength);
    }

    //保持中间数据居中
    turnRight(this.content);

    //初始化中间元素位置
    this.centerIndex = 2;
    console.log(props.centerStyle);

    this.style[this.centerIndex] = {
      ...this.style[this.centerIndex],
      ...props.centerStyle
    };
    // setCenterCardStyle(this.style[this.centerIndex], props.centerStyle);

    console.log(this.style);

    this.state = {
      bannerConfig: this.style
    };
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
    // animate(this.swiperBtnGroup.current, { opacity: 1 });
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

    this.centerIndex++;
    this.centerIndex = this.centerIndex % this.totalLength;

    //样式修改
    const newConfig = [].concat(bannerConfig);
    newConfig.unshift(newConfig.pop());

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

    this.centerIndex--;
    if (this.centerIndex < 0) {
      this.centerIndex = this.totalLength - 1;
    }

    //样式更改
    const newConfig = [].concat(bannerConfig);
    const item = newConfig.shift();
    newConfig.push(item);

    this.setState({
      bannerConfig: newConfig
    });

    this.renderBanner(newConfig);
  };

  render() {
    const { containerStyle, centerStyle } = this.props;

    let list = this.content.map((item, index) => {
      item._style = Object.assign({}, this.style[index]);

      for (let key in item.style) {
        if (["width", "top", "left"].includes(key)) {
          item._style[key] = item.style[key] + "px";
        }
      }

      if (index === this.centerIndex) {
        item._style = {
          ...item._style,
          ...centerStyle
        };
      }

      //添加显示逻辑
      if (shouldShow(index, this.centerIndex, this.totalLength)) {
        item._style = {
          ...item._style,
          visibility: "visible"
        };
      }

      return item;
    });

    const style = {};
    for (let key in containerStyle) {
      if (["width", "height"].includes(key)) {
        style[key] = containerStyle[key] + "px";
      }
    }

    return (
      <>
        <div
          className="slide"
          ref={this.swiperWrap}
          style={style}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <ul
            ref={this.swiperContainer}
            style={{ left: `-${this.props.leftOffset}px` }}
          >
            {list.map((item, index) => {
              return (
                <li className="banner-item" style={item._style} key={item.id}>
                  {item.render()}
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
      </>
    );
  }
}

class View extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef();
    this.state = {
      initStyle: [],
      leftOffset: 0
    };
  }

  componentDidMount() {
    const node = this.dom.current;
    const containerWidth = node.getBoundingClientRect().width;

    const { style } = this.props;
    const {
      gap = 30,
      cardWidthRatio = 0.53,
      cardHeight = 100,
      cardTop = 0,
      ...restStyle
    } = style;
    const cardWidth = Math.round(containerWidth * cardWidthRatio);

    const initStyle = [...Array(roundItems)].map((item, index) => {
      return {
        width: cardWidth,
        height: cardHeight,
        left: Math.round((cardWidth + gap) * index),
        top: cardTop,
        visibility: "hidden",
        ...restStyle
      };
    });

    const leftOffset = Math.round(
      cardWidth * 2.5 + gap * 2 - containerWidth / 2
    );

    this.setState({
      initStyle,
      leftOffset
    });
  }

  render() {
    const { content, containerStyle, centerStyle } = this.props;
    const { initStyle, leftOffset } = this.state;

    const style = {};

    for (let key in containerStyle) {
      if (["width", "height"].includes(key)) {
        style[key] = containerStyle[key] + "px";
      }
    }

    return (
      <div className="banner-container" style={style}>
        <div ref={this.dom}></div>
        {initStyle.length !== 0 && (
          <Carousel
            content={content}
            style={initStyle}
            containerStyle={containerStyle}
            centerStyle={centerStyle}
            leftOffset={leftOffset}
          />
        )}
      </div>
    );
  }
}

export default View;
