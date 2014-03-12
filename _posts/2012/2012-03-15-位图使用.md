---
layout: post
title: 位图使用
date: 2012-03-15 08:04
author: guoguogis
comments: true
categories: [flash]
tags: [bitmap, bitmapdata, bitmapimage]
---
1、Bitmap:

Bitmap 类表示用于表示位图图像的显示对象。这些图像可以是使用 flash.display.Loader 类加载的图像，也可以是使用 <code>Bitmap()</code>构造函数创建的图像.利用 <code>Bitmap()</code> 构造函数，可以创建包含对 BitmapData 对象的引用的 Bitmap 对象。创建了 Bitmap 对象后，使用父DisplayObjectContainer 实例的 <code>addChild()</code> 或 <code>addChildAt()</code> 方法将位图放在显示列表中。 一个 Bitmap 对象可在若干 Bitmap 对象之中共享其 BitmapData 引用，与转换属性或旋转属性无关。由于能够创建引用相同 BitmapData 对象的多个 Bitmap 对象，因此，多个显示对象可以使用相同的复杂 BitmapData 对象，而不会因为每个显示对象实例使用一个 BitmapData 对象而产生内存开销。(<span style="color: #ff0000;">这句话的意思就是说可以多个Bitmap共用一个BitmapData,这样就解决了多个Bitmap渲染相同纹理的问题</span>)

2、BitmapData：

BitmapData继承自Object，不是可显示对象。它用来保存显示对象Bitmap的数据，而且能对这些位图数据进行像素级别的操作；

3、BitmapImage:

BitmapImage 元素在其父元素的坐标空间内定义一个矩形区域，使用从源文件或源 URL 获取的位图数据填充。

4、由于Flex 4中不再有能设置背景图像的Canvas控件，所以要达到这种类似的效果，可以用BitmapImage来填充； 5、在移动端开发中，为了性能尽量使用BitmapImage来代替Image控件；

移动端AS项目中使用代码：

```
public class MyTweenMap extends Sprite
 {
     public function MyTweenMap()
     {
         super();
         var loader:Loader = new Loader();
         loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onLoadComplete);
         loader.load(new URLRequest(&quot;assets/map.jpg&quot;));

         stage.align = StageAlign.TOP_LEFT;
         stage.scaleMode = StageScaleMode.NO_SCALE;
     }

     private function onLoadComplete(evt:Event):void{
         var image:Bitmap = Bitmap(LoaderInfo(evt.target).content);
         var iphoneList:iScrollBox = new iScrollBox(image);
         this.addChild(iphoneList);

     }
 }
```
