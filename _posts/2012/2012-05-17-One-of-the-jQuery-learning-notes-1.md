---
layout: post
title: jQuery学习笔记之一不唐突的Javascript
date: 2012-05-17 18:43
author: guoguogis
comments: true
categories: [HTML5]
tags: [jQuery]
---
大家知道，前端页面有三要素，一个就是HTML标签，即页面结构，第二个就是JavaScript行为代码，即JS脚本，第三就是CSS样式。

这三样东西不管你怎么写，写的有多乱只要没有语法错误都可以运行出来相同的结果，然而作为前端开发人员来说，我们也力求结构简明，减少代码维护成本。对于很多人来说在一个页面中写三种代码本来不是很合理的做法，那我们该怎么达到我们结构简明的目的呢？答案就是将样式、行为和结构框架进行分离。这种策略就叫“不唐突的javascript”。

策略的核心就是将结构、样式和行为整齐地方志在页面的不同部门，最大限度地确保可读性和可维护性：样式和行为代码放置在&lt;head&gt;标签中，结构放置在body中。

但是这样做的话比如一些按钮的事件如click事件也需要提出到行为代码中，如下代码：

```
window.onload = function (){

    document.getElementById('testButton').onClick = function(){

        document.getElementById('xyz') . style.color = 'red';

    }

}
```

如上代码，从一定程度上看，我们为了达到不唐突的javascript的目的而增加了不少代码量，但是这也未尝不是一件好事，它促使我们以编写后台服务器端代码的严谨态度来编写客户端代码。

而jQuery就是为了解决这个问题应运而生的，它能以最小的最简单的代码来实现强大的功能。换句话说我们用jQuery可以即实现不唐突的javascript，也可以以最短小精悍的代码实现强大的功能。
