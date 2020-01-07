/**
 * 获取任意样式
 * @param {*} element
 * @param {*} attr
 */
const getStyle = (element, attr) => {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr]; // chrome firefox
  }

  return element.currentStyle[attr]; // IE8
};

/**
 * 缓动动画
 * @param {*} element
 * @param {*} attrs
 * @param {*} fn
 */
const animate = (element, attrs, fn) => {
  element.timerId && clearInterval(element.timerId);

  element.timerId = setInterval(() => {
    let isStop = true; // 用于检测停止

    for (let attr in attrs) {
      // 获取属性的当前值
      // 计算 step = (目标值 - 当前值) / 常量 (每一次step会越来越小,最后为零)

      const whiteListProperty = ["zIndex", "opacity", "left"];

      if (!(whiteListProperty.findIndex(item => item === attr) !== -1)) {
        continue;
      }

      let current = 0;
      let step = 0;

      if (attr === "zIndex") {
        element.style.zIndex = attrs[attr];
      } else if (attr === "opacity") {
        current = parseFloat(getStyle(element, attr)) * 100 || 0;
        step = (attrs[attr] * 100 - current) / 12;
      } else {
        current = parseInt(getStyle(element, attr)) || 0;
        step = (attrs[attr] - current) / 12;
      }

      step = step > 0 ? Math.ceil(step) : Math.floor(step);

      // 检测停止, 只要有属性没达到目标值, 定时器都不能关
      if (step !== 0) {
        isStop = false;
      }

      // 更新属性值, 属性值 = 当前值 + 步长 + （px）
      if (attr === "opacity") {
        element.style.opacity = (current + step) / 100; // chrome  ff
        element.style.filter = `alpha(opacity=${current + step})`; // IE8及以下
      } else {
        element.style[attr] = current + step + "px";
      }
    }

    if (isStop) {
      clearInterval(element.timerId);
      fn && fn();
    }
  }, 16);
};

const scroll = () => {
  return {
    scrollTop: document.body.scrollTop || document.documentElement.scrollTop,
    scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft
  };
};

export { animate, scroll };
