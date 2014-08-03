---
layout: post
title: Flex4设置ToolTip样式
date: 2012-03-08 01:53
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
通过设置CSS样式可以设置ToolTip的样式：

<strong>一个自定义ToolTip中显示自定义图片的例子：</strong>
我搞了一下才弄出来的，希望大家多提意见：

Application中
```
<?xml version="1.0" encoding="utf-8"?>;
<s:Application xmlns:fx="<a href="http://ns.adobe.com/mxml/2009" rel="nofollow">http://ns.adobe.com/mxml/2009</a>"
xmlns:s="library://ns.adobe.com/flex/spark"
xmlns:mx="library://ns.adobe.com/flex/mx" minWidth="955" minHeight="600">;
<fx:Declarations>;
<!-- 将非可视元素（例如服务、值对象）放在此处 -->;
</fx:Declarations>;
<fx:Script>;
<![CDATA[
import mx.controls.ToolTip;
import mx.events.ToolTipEvent;
import mx.managers.ToolTipManager;
private function createToolTips(event:ToolTipEvent):void {
var tip:MyToolTips=new MyToolTips();
tip.str="我的SuperToolTIp";
tip.str1="img/01.gif";
event.toolTip = tip;
}
private function showToolTips(evt:ToolTipEvent):void{
evt.toolTip.x=a.x + a.width + 10;
evt.toolTip.y=a.y;
}
]]>;
</fx:Script>;
<mx:HBox height="100%" verticalAlign="middle" width="100%" horizontalAlign="center">;
<mx:Button id="a"
label="SuperToolTip"
width="100"
toolTip="00000"
toolTipCreate="createToolTips(event);"
toolTipShow="showToolTips(event);"/>;
</mx:HBox>;
</s:Application>;

自定义ToolTip

MyToolTips.mxml

<?xml version="1.0" encoding="utf-8"?>;
<mx:Canvas xmlns:fx="<a href="http://ns.adobe.com/mxml/2009" rel="nofollow">http://ns.adobe.com/mxml/2009</a>"
xmlns:s="library://ns.adobe.com/flex/spark"
implements="mx.core.IToolTip"
xmlns:mx="library://ns.adobe.com/flex/mx"
backgroundColor="#00ff33" alpha=".8" width="100%" borderStyle="solid" cornerRadius="7">;
<fx:Script>;
<![CDATA[
import mx.core.IToolTip;
public var str:String="";
public var str1:String="";
public var _text:String;
public function get text():String {
return _text;
}
public function set text(value:String):void {
}
]]>;
</fx:Script>;
<fx:Declarations>;
<!-- 将非可视元素（例如服务、值对象）放在此处 -->;
</fx:Declarations>;
<mx:VBox width="100%" height="100%">;
<mx:Image source="{str1}"/>;
<mx:Text text="{this.str}" color="#000000" fontSize="13"/>;
</mx:VBox>;
</mx:Canvas>;
```