---
layout: post
title: 通过BitMap截取SWF文件中的部分内容渲染在Flash中
date: 2012-03-22 16:07
author: guoguogis
comments: true
categories: [flash]
tags: [bitmap]
---
通过BitMap可以讲SWF中的部分内容截取出来并渲染在主SWF文件中：

[code lang="java"]

package
{
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Sprite;

public class Test extends Sprite
{
[Embed(source=&quot;/../embeds/signature.swf&quot;, symbol=&quot;Signature&quot;)]
public var SignatureSwf:Class;

public function Test()
{
super();
init();
}

private function init():void{
var Signature:Sprite = Sprite(new SignatureSwf());
var SignatureBitmap:Bitmap = new Bitmap(new BitmapData(Signature.width, Signature.height, true, 0));
SignatureBitmap.bitmapData.draw(Signature);
addChild(SignatureBitmap);
}
}
}

[/code]
