---
layout: page
title: 用forIn遍历数组时的问题
tagline: Supporting tagline
tags: [javascript]
categories: [html5]
comments: true

---
{% include JB/setup %}
----------

当用for...in来遍历数组时，在IE8下会出现一个问题：

{% highlight javascript%}
var hi=["hi", "lo", "foo", "bar"];
for(i in hi){
    console.log(i)
};

//WTF is that indexOf i value?
LOG: 0
LOG: 1
LOG: 2
LOG: 3
LOG: indexOf
undefined
{% endhighlight %}

我们看到多了key为idnexOf的一项，而在其他浏览器中不会出现这个问题，为啥呢？

stackflow上解释为：

**indexOf方法在IE8下为枚举类型，所以会被遍历出来。**

