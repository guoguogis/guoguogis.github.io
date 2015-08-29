---
layout: post
title: AngularJS中$watch第一个参数为函数且没有返回值的问题
tagline: Supporting tagline
tags: [angularjs]
categories: [javascript]
comments: true

---
{% include JB/setup %}
----------

在AngularJS中使用$watch(exp, fn, isDeep)时有三个参数：

+ exp: 表达式，可以为字符串或者有返回字符串的的函数
+ fn:  回调函数，当侦听的值右边时的响应函数
+ isDeep: 是否深度侦听


{% highlight javascript%}
   $scope.$watch(function(){
        console.log(111);
    }, function(newValue){
        console.log('222'+ newValue);
    });
{% endhighlight %}


可以看到，上面用法第一个function没有返回任何值或者表达式。

+ 不管页面有没有输入框，加载页面后，我们发现打印了两次'111'。
+ 当页面没有输入框时，动态改变页面部分文字，我们发现不会打印 '111',也不会打印'222'任何信息。
+ 当页面有输入框，且输入框不论是否绑定模型，手动给输入框输入值时，都打印'111'，但不会打印任何'222'的信息。

由上面现象，我们可以得出结论

{% highlight javascript%}
   $scope.$watch(function(){
        console.log(111);
   });
{% endhighlight %}

+ 以上方法可以作为一种高级用法，主要用在当需要知道页面是否有输入时，或者有任意输入进行回调时。作用类似于侦听了document的input方法，通过查看AngularJS源码，也确实是这样实现的。
+ 当通过这种方式来侦听页面是否有输入，且当有输入时控制按钮状态是否可用等操作时，这里首先需要保证一个前提：所有输入框都绑定了数据，否则获取的状态不准确。
