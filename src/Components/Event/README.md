## What is this?

## Version

## Note

正常子元素点击
```text
child click
parent click
document click
```

e.stopPropagation(); //子元素设置
```text
child click
document click
```

e.nativeEvent.stopImmediatePropagation(); //子元素设置
```text
child click
parent click
```


对于 React 的合成事件对象 e 来说：

- e.stopPropagation → 用来阻止 React 模拟的事件冒泡
- e.stopImmediatePropagation → 没有这个函数
- e.nativeEvent.stopPropagation → 原生事件对象的用于阻止 DOM 事件的进一步捕获或者冒泡
- e.nativeEvent.stopImmediatePropagation → 原生事件对象的用于阻止 DOM 事件的进一步捕获或者冒泡，且该元素的后续绑定的相同事件类型的事件也被一并阻止。

Note:
- 事实上nativeEvent的stopImmediatePropagation只能阻止绑定在document上的事件监听器
- 阻止合成事件与 除最外层document上的原生事件 上的冒泡，通过判断 e.target 来避免

1. ![React 事件代理与 stopImmediatePropagation](https://github.com/youngwind/blog/issues/107)
