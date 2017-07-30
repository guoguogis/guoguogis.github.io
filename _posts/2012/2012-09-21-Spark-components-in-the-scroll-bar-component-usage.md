---
layout: post
title: Spark组件中的滚动条组件用法
date: 2012-09-21 19:59
author: root
comments: true
categories: [flash]
tags: [Scroller]
---
大家知道，Spark组件中很多组件不自带滚动条，如果想用滚动条效果，需要手动添加。

如VBox组件在Flex 4.5以后推荐使用VGroup代替，而VGroup就没有滚动条效果，要想做到有工具条效果有两种方式：

1、通过组件添加

{% highlight html%}
<s:Scroller width="100" height="100">;
     <s:Group horizontalScrollPosition="50" verticalScrollPosition="50">
        <mx:Image width="300" height="400" source="@Embed(source='assets/logo.jpg')">
     </s:Group>
</s:Scroller>
{% endhighlight %}

2、通过代码添加

这里需要注意的是，虽然看到上面的Scroller标签在Group标签之外，但是Scroller不是普通的容器，它不是通过<a href="#addElement()">addElement</a>来添加。只能通过viweport来添加了。

代码为:

{% highlight as%}
var p:Panel = new Panel();
var sc:Scroller = new Scroller();
panel.addElement(sc);
sc.viewport = visualElement as IViewport;
{% endhighlight %}
