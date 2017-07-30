---
layout: post
title: 浏览器兼容性整理
date: 2014-09-15
author: guoguogis
comments: true
categories: [javascript]
tags: [javascript]
---

### CSS兼容性

#### css继承

netscape 4、IE6及以下浏览器不支持该属性，但是netscape 4支持分组显示css属性.

如：
{% highlight css%}
body{
     font-family: Verdana, sans-serif;
}

p, td, ul, ol, li, dl, dt, dd{
     font-family: Verdana, sans-serif;
}
{% endhighlight %}


#### 属性选择器
只有在规定了!DOCTYPE 时，IE7和IE8才支持属性选择器。在IE6及更低的版本中，不支持属性选择。


#### 不要在属性值与单位之间留有空格

如：
{% highlight css%}
p1{
    padding:12 px;
}

p2{
    padding:12px;
}
{% endhighlight %}

前一种写法只在IE6中有效.


**学习到样式**

### JS兼容性


### HTML兼容性


