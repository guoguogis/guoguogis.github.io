---
layout: post
title: 闭包的两个常用应用场景
date: 2014-03-05
author: guoguogis
comments: true
categories: [html5]
tags: [闭包,javascript]
---
-----------
### 闭包的概念
先来一段“老道”给出的概念：
>闭包是指在 JavaScript 中，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。


### 闭包的特性
由上面“闭包”概念可以得出两个信息：
*1、封闭性*；
*2、持久性*；

封闭性只函数外部不能访问函数内部变量，函数内部变量对于外部调用来说是封闭不可见的。
持久性是指外部调用通过闭包方式访问函数内部变量，即使该变量被调用完成后，也不会被GC掉，而是一直保存在内存中。

### 最常用使用场景

####场景一：自执行函数，用于控制全局变量作用范围，暴露接口
```
(function (){
   var a = 'a'; 
   function getA(){
        return a;
   }

    window.Model = {
        'getA':getA
    }
})();
```
通过上面方法，可以将Model挂载到window上；

####场景二：模块化编程
```
var Module = (function(){
    var privateProperty = 'foo';

    function privateMethod(args){
        //do something
    }

    return {

        publicProperty: "",

        publicMethod: function(args){
            //do something
        },

        privitegedMethod: function(args){
            privateMethod(args);
        }
    }
})();
```
通过这种方式可以直接通过Module.privitegedMethod来访问privateMethod；

-----------