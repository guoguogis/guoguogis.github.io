---
layout: post
title: Array数据类型判断
date: 2014-02-25
author: guoguogis
comments: true
categories: [html5]
tags: [array,javascript]
---
-------

javascript中的数据类型跟其他语言的数据类型有所不同，由于javasprit的弱语言类型的特点，分为基本数据类型(string,bollean,number,undefined,null)和复杂数据类型array,function,object等。

对于基本数据类型通过typeof关键字即可检测Function/String/Number/Undefined这几类数据类型，不再举例。

而对于复杂数据类型通过typeof获得的返回都为"object",所以不能通过typeof检测复杂数据类型，但却有其他方法来判断Array。

### 通过instanceof操作符

该操作符用来检测对象的原型链是否指向构造函数的prototype对象。

```
var a = [];
console.log(a instanceof Array);//true
```

### 通过对象的constructor

可以通过对象的constructor来判断类型

```
var a = [];
console.log(a.constructor == Array);//true
```

OK,看了上面两个instanceof和constructor来判断数据类型貌似比较靠谱；但事实并非如此！

举个栗子：
```
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3);
console.log(arr instanceof Array);//false
console.log(arr.constructor === Array);//false

```
上例可以看到，用instanceof和constructor来判断Array类型在不同执行上下文中也不靠谱；以下用查看对象内部属性的方式来判断是否为数组最为靠谱；

### 通过对象的内部属性判断

```
var isArray = function(arr){
    return Object.prototype.toString.call(arr) == '[object Array]';
}

console.log(isArray([]));//true
```

为何如此？请看ECMA标准：

>Object.prototype.toString() When the toString method is called,the follow steps are taken;
1.Get the [[Class ]] property of the object;
2.Gompute a string value by concatenating the three strings "[object",Result(1),and "]";
3.Return Result(2);

根据以上方法可以获取内部属性，然后再转化为字符串比较，以达到我们的目的。

上例中的[object Array]是不可变的值，通过call改变toString引用为检测的对象，返回该对象的字符串标示，然后对比该对象的字符串表示是否为[object Array]。

该方法很好的解决了iframe的问题.


目前Chrome V8引擎和firefox都已经支持Array.isArray这种类型检测，可以直接使用，如下：
```
var a = [];
console.log(Array.isArray(a));//true
```

-------

