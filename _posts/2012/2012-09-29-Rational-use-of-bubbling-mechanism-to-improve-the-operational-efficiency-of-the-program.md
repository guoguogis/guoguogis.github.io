---
layout: post
title: 合理利用冒泡机制，提高程序运行效率
date: 2012-09-26 11:17
author: guoguogis
comments: true
categories: [flash]
tags: [冒泡]
---
在大多数程序开发语言中，事件机制都采用冒泡机制，这里以Flex为例：如果一个容器中包含若干个组件，而且这些组件都侦听相同的操作，这时候如果为每个组件添加侦听，则会耗费不少内存。较好的方法是为容器添加侦听，当响应相关事件时通过判断事件的target和currenttarget来进行不同操作。

示例如下，如图，我再BoarderContainer中添加了5个按钮：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/09/1.png"><img class="alignnone size-medium wp-image-409" title="1" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/09/1-300x291.png" alt="" width="300" height="291" /></a>

我想要响应不同按钮的单击操作，可以为容器添加MouseEvent.ClICK事件，代码为：

```
&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?&gt;
&lt;s:Application xmlns:fx=&quot;http://ns.adobe.com/mxml/2009&quot;
 xmlns:s=&quot;library://ns.adobe.com/flex/spark&quot; creationComplete=&quot;application1_creationCompleteHandler(event)&quot;
 xmlns:mx=&quot;library://ns.adobe.com/flex/mx&quot; minWidth=&quot;955&quot; minHeight=&quot;600&quot;&gt;
 &lt;fx:Script&gt;
 &lt;![CDATA[
     import mx.events.FlexEvent;

     protected function application1_creationCompleteHandler(event:FlexEvent):void
     {
        bdContainer.addEventListener(MouseEvent.CLICK,onClick);
     }
     private function onClick(e:MouseEvent):void{
        trace(e.target.id);
        trace(e.currentTarget.id);
     }
 ]]&gt;
 &lt;/fx:Script&gt;
 &lt;fx:Declarations&gt;
 &lt;!-- 将非可视元素（例如服务、值对象）放在此处 --&gt;
 &lt;/fx:Declarations&gt;
 &lt;s:BorderContainer id=&quot;bdContainer&quot; width=&quot;400&quot; height=&quot;400&quot;&gt;
 &lt;s:Button id=&quot;btn1&quot; label=&quot;按钮1&quot; y=&quot;20&quot;/&gt;
 &lt;s:Button id=&quot;btn2&quot; label=&quot;按钮2&quot; y=&quot;50&quot;/&gt;
 &lt;s:Button id=&quot;btn3&quot; label=&quot;按钮3&quot; y=&quot;80&quot;/&gt;
 &lt;s:Button id=&quot;btn4&quot; label=&quot;按钮4&quot; y=&quot;110&quot;/&gt;
 &lt;s:Button id=&quot;btn5&quot; label=&quot;按钮5&quot; y=&quot;140&quot;/&gt;

 &lt;/s:BorderContainer&gt;

&lt;/s:Application&gt;
```
