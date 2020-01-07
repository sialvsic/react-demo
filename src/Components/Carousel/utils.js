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
  const leftPosition = newStyle[0].left;
  const rightPosition = newStyle[length - 1].left;
  const distance = rightPosition - leftPosition; //最左最后之间的间距

  const segment = distance / (leftNumber + 1);

  const leftStyle = [...Array(leftNumber)].map((item, index, total) => {
    return {
      width: newStyle[0].width,
      height: newStyle[0].height,
      top: -300,
      left: segment * (total.length - index)
    };
  });

  return newStyle.concat(leftStyle);
}

export function turnRight(lists) {
  return lists.unshift(lists.pop());
}
