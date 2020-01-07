export function double(lists) {
  const newArray = lists.map(list => {
    return Object.assign({}, list, { id: list.id + 1 });
  });

  return lists.concat(newArray);
}

//计算样式
export function calcStyle(style, totalLength, length = 5) {
  const newStyle = [].concat(style.slice(0, length)); //除了前5个的样式

  const leftNumber = totalLength - length;

  const first = newStyle[0];
  const last = newStyle[length - 1];
  const leftPosition = first.left;
  const rightPosition = last.left;

  const distance = rightPosition - leftPosition; //最左最后之间的间距
  const { width, height, top, left, zIndex, ...restStyle } = newStyle[0];

  const segment = distance / (leftNumber + 1);

  const leftStyle = [...Array(leftNumber)].map((item, index, total) => {
    return {
      width: width,
      height: height,
      top: top,
      left: segment * (total.length - index),
      ...restStyle
    };
  });

  return newStyle.concat(leftStyle);
}

export function turnRight(lists) {
  return lists.unshift(lists.pop());
}

export function shouldShow(index, centerIndex, length) {
  let isLeft = false;
  let isRight = false;

  if (centerIndex === 0) {
    isLeft = index === length - 1;
    isRight = index === 1;
  } else if (centerIndex === length - 1) {
    isLeft = index === length - 2;
    isRight = index === 0;
  } else {
    isLeft = index === centerIndex - 1;
    isRight = index === centerIndex + 1;
  }
  const isCenter = index === centerIndex;

  if (isCenter || isLeft || isRight) {
    return true;
  }
  return false;
}
