---
layout: post
title: 主组件不能监听ItemRender中派发的事件的处理方法
date: 2012-06-28 11:49
author: guoguogis
comments: true
categories: [flash]
tags: [ItemRender, List]
---
根据事件的冒泡原理，子组件派发的事件肯定能被子组件本身以父组件监听到，但是ItemRender却不同，在ItemRender中派发一个事件，却不能在其父组件中侦听，我这里用List所对应的ItemRender来实验，代码如下：

{% highlight as%}
var e:DynamicEvent = new DynamicEvent("changeVisibleEvent");
e.selected = itemVisibleConrol.selected;
e.name = layerName;
this.dispatchEvent(e);
{% endhighlight %}

父组件中侦听代码如下：
{% highlight as%}
layerList.addEventListener("changeVisibleEvent",onChangeLayerVisible);
{% endhighlight %}

发现只能利用ItemRender的父组件来派发事件：

代码如下:
{% highlight as%}
var e:ListEvent = new ListEvent("changeVisibleEvent");
e.itemRenderer = this;
this.owner.dispatchEvent(e);
{% endhighlight %}