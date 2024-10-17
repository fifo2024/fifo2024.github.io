---
layout: post
title: FramerMotion 入门
date: 2024-10-09 09:36:00
categories: [动画组件]
tags: [motion, animation, transition]
---

## React动画库对比
![alt 图片](http://www.cdnstatic.cn/fifo2024/framer-motion-starter-1.png)
![alt 图片](http://www.cdnstatic.cn/fifo2024/framer-motion-starter-2.png)

## react-transition-group
### 简单介绍
[React Transition Group](https://www.npmjs.com/package/react-transition-group)是一个 React 库，用于管理和处理在 React 应用中的过渡动画效果。它提供了一组组件，可以帮助你在组件的进入和退出时应用动画效果。
它更像一个轻量、简单的动画库，它甚至不算一个动画库，它只提供触发机制、具体动画需要自行编写，它可以应对大量常见简单动画，如果你需要编写高级动画，建议用react-spring、framer-motion等。
官方地址 [https://reactcommunity.org/react-transition-group/css-transition](https://reactcommunity.org/react-transition-group/css-transition)
![alt 图片](http://www.cdnstatic.cn/fifo2024/framer-motion-starter-3.png)

### 安装
```
npm install react-transition-g
```

### CSSTransition
CSSTransition是我们最常用的一个组件，它提供两组动画的切换，一般我们可以用于元素的隐藏和显示，可以应对大部分的简单动画，相比于我们手动去添加类名等操作，它会更加方便。
我们需要用CSSTransition组件来包裹需要做动画的元素，并且只能有一个children元素，并且CSSTransition这个元素最终并不会渲染到页面中，只会留下box元素。
```
<CSSTransition in={show} timeout={2000} classNames="fade">
	<div className="box"></div>
</CSSTransition>
```

常用属性
- in：用于动画的切换，boolean 值，分别对应进入和退出两组动画
* false -> true： 对应一组动画类名：*-enter、 *-enter-active、 *-enter-done
* true-> false：对应一组动画类名：*-exit、 *-exit-active、 *-exit-done
- timeout：动画的作用时间，单位：ms
- classNames：两种形式，字符串形式：指定动画类名的前缀。对象形式：指定每一个具体的类名
- unmountOnExit：元素在完成动画时是否从页面中移除该dom元素
- appear：指定元素首次渲染在页面时，是否进行动画。对应一组动画类名：*-appear、 *-appear-active、 *-appear-

执行原理
```
    <CSSTransition
    in={show}
    timeout={500}
    classNames={{
        enter: 'fade-enter',
        enterActive:'fade-enter-active',
        enterDone: 'fade-enter-done',
        exit: 'fade-exit',
        exitActive: 'fade-exit-active',
        exitDone: 'fade-exit-done',
    }}
    >
    <div className='box'></div>
    </CSSTransition>
```

初始时，我们设置in为true，我们点击切换，in从true->false。
timeout时间到，移除.fade-exit和.fade-exit-active这两个类名，并添加.fade-exit-done类名，过程结束。
```
.fade-exit {
    opacity: 1;
    transform: translateX(0);
}

.fade-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s;
}
```

再次点击切换，in从false->true。
移除.fade-exit-done，并先后添加.fade-enter和.fade-enter-active，元素开始做动画，并开始计时（timeout）。
timeout时间到，移除.fade-enter和.fade-enter-active，并添加.fade-enter-done。过程结束。

```
.fade-exit-done {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s;
}
```

简单总结，CSSTransition的动画原理就是在指定时刻添加添加类名和移除类名，通过transitioncss属性达成平滑过渡，它并没有使用到@keyframes。
transition: all 0.5s;。这个timeout准确来说应该是*-enter和*-enter-active（或者*-exit和 *-exit-active）的作用时间

## 本站源码
- [rollup-starter 源代码](https://github.com/fifo2024/rollup-starter)
- [tsup-starter 源代码](https://github.com/fifo2024/tsup-starter)