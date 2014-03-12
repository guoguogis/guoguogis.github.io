---
layout: post
title: Starling 框架学习总结三 之 事件篇
date: 2012-02-28 05:57
author: guoguogis
comments: true
categories: [flash]
tags: [Starling]
---
###一：鼠标事件（TOUCH）：

与Flash原生API不同，Starling 事件API中没有任何关于Mouse API，而是通过TouchEvent.TOUCH来侦听鼠标和手指移动（在新版Flash原生API中，默认将Mouse事件映射为Touch事件，这里的过程正好相反）。我们可以通过Touch事件的响应函数来获取当前鼠标点或者手指点所在的位置：
```
var touch:Touch = e.getTouch(stage);
var pos:Point = touch.getLocation(stage);
```
这里需要注意的是：与原生Flash不同的是Starling中的所有DisplayObject对象都是可交互的，而在原生Flash中只有同时继承了DisplayObject和InteractiveObject两个类才能交互。
每当鼠标或者数值与以图形进行交互时，都会触发Touch事件，当触发事件时如下图所示：
<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/12.png"><img class="alignnone size-medium wp-image-200" title="1" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/12-300x81.png" alt="" width="300" height="81" /></a>
由上图可以看出，事件e带有大量的信息：</pre>
<span style="color: #008000;">∗ ctrlKey : 触发Touch事件是是否按住Ctrl键 </span>
<span style="color: #008000;">∗ getTouch: 得到此事件的Touch对象 </span>
<span style="color: #008000;">∗ getTouches : 得到一组Touch对象（用于多点交互） </span>
<span style="color: #008000;">∗ shiftKey: 触发Touch事件是是否按住Shift键 </span>
<span style="color: #008000;">∗ timestamp : 事件触发时间 </span>
<span style="color: #008000;">∗ touches : 得到同一时间发生的全部 Touch 对象</span>

在每一个Touch中（每一个事件点）：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/21.png"><img class="alignnone size-medium wp-image-201" title="2" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/21-300x194.png" alt="" width="300" height="194" /></a>

<span style="color: #008000;">∗ clone : 复制一个副本 </span>
<span style="color: #008000;">∗ getLocation: 得到Touch事件触发的对应于当前坐标系的位置</span>
<span style="color: #008000;">∗ getPreviousLocation: 得到之前触发的Touch事件对应于当前坐标系的位置</span>
<span style="color: #008000;">∗ globalX、Y: 得到Touch事件触发的舞台位置</span>

<span style="color: #008000;">∗ id: 一个Touch对象所拥有的独一无二的标示符 </span>
<span style="color: #008000;">∗ phase : 指示当前事件触发的类型（阶段） </span>
<span style="color: #008000;">∗ previousGlobalX、Y : 得到之前触发的Touch事件舞台位置 </span>
<span style="color: #008000;">∗ tapCount : 手指轻拍显示对象的次数（用以识别手指双拍） </span>
<span style="color: #008000;">∗ target : 触发Touch事件的对象 </span>
<span style="color: #008000;">∗ timestamp : 事件触发时间（此时间是从应用程序启动开始计时的）</span>

在每个touch对象的phase取值为：

<span style="color: #008000;">∗ began : 鼠标/手指开始交互（类似于mouseDown） </span>
<span style="color: #008000;">∗ ended : 鼠标/手指停止交互（类似于mouseClick） </span>
<span style="color: #008000;">∗ hover : 鼠标/手指悬于物体上（类似于mouseOver） </span>
<span style="color: #008000;">∗ moved : 鼠标/手指在物体上移动（类似于mouseDown + mouseMove） </span>
<span style="color: #008000;">∗ stationary : 鼠标/手指停止与物体的交互但仍停留在其上</span>

###二：移除事件或者移除显示对象：

在Starling API中移除事件与原生Flash API中移除事件类似，用removeEventListerner来实现。

与Flash 原生API中不同的是在Starling API中移除显示对象时可以同时移除该显示对象的子对象、该显示对象的所有注册的事件以及该显示对象的子对象注册的事件：

方法1：为在DisplayObject中的removeChild/removeChildren/removeChildAr等方法的第二个参数<span style="color: #ff0000;">dispose</span>设置为ture即可。

方法2：当在不设置参数dispose或者dispose为默认值的情况下，可以手动调用DisplayObject的dispose()方法。

###三：EventDispatcher

与原生Flash中一样，starling中所有的类都继承自继承自EventDispatcher类，并提供了派发和侦听事件的方法：

<span style="color: #339966;">∗ addEventListener : 为指定事件添加事件侦听器. </span>
<span style="color: #339966;">∗ hasEventListener : 为指定事件监测是否具备事件侦听器 </span>
<span style="color: #339966;">∗ removeEventListener : 移除某个事件侦听器</span>
<span style="color: #ff0000;">∗ removeEventListeners : 移除一个对象中对某一事件或全部事件添加的侦听器</span>

如上列表可知，Starling除了保留了原生事件模型的侦听、派发方法外，还提供了removeEventListeners方法，当要移除某个对象上侦听的所有方法，则只需removeEventListeners的参数为空即可。

###四：事件冒泡机制：

Starling中保留了原生Flash的事件冒泡机制，但是没有事件捕获阶段。

###五：模拟多点触摸：

Starling为我们提供了一个内置的多点触摸模拟机制，如需启动多点触摸功能，则只需Starling的对象的simulateMultiTouch属性为true即可。一旦启用了多点触摸功能，你就可在应用程序中通过按下Ctrl键然后移动鼠标来模拟多点触摸输入了。

对于两点的触摸事件的处理我们可以参考一下代码：

```
private function onTouchedSprite(e:TouchEvent):void
{
    // retrieves the touch points
    var touches:Vector.&lt;Touch&gt; = e.touches;
    // if two fingers
    if ( touches.length == 2 )
    {
    var finger1:Touch = touches[0];
    var finger2:Touch = touches[1];
    var distance:int;
    var dx:int;
    var dy:int;

    // if both fingers moving (dragging)
    if ( finger1.phase == TouchPhase.MOVED &amp;&amp; finger2.phase == TouchPhase.MOVED )
    {
        // calculate the distance between each axes
        dx = Math.abs ( finger1.globalX - finger2.globalX );
        dy = Math.abs ( finger1.globalY - finger2.globalY );
        // calculate the distance
        distance = Math.sqrt(dx*dx+dy*dy);
        trace ( distance );
    }
}
```