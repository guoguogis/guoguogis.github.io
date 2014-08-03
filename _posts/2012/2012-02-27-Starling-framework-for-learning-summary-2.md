---
layout: post
title: Starling 框架学习总结二 之 上手篇
date: 2012-02-27 07:38
author: guoguogis
comments: true
categories: [flash]
tags: [Starling]
---
上一讲（<a title="Starling 框架学习总结一 之 初识及安装篇" href="http://www.gisthink.com/blog/wordpress/?p=175">Starling 框架学习总结一 之 初识及安装篇</a>）学习了Starling的基本概念、工作原理等内容。在这一讲中我们将参考示例继续深入学习怎么样使用Starling框架来创建我们的应用。

###一：构建场景：

在Starling自带的示例中我们可以看到在主应用程序的构造函数中需要构建Starling对象：

```
public class Startup extends Sprite
 {
    private var mStarling:Starling;

    public function Startup()
    {
        stage.scaleMode = StageScaleMode.NO_SCALE;
        stage.align = StageAlign.TOP_LEFT;

        Starling.multitouchEnabled = true;

        mStarling = new Starling(StartPage, stage);
        mStarling.simulateMultitouch = true;
        mStarling.enableErrorChecking = false;
        mStarling.start();

        // this event is dispatched when stage3D is set up
        stage.stage3Ds[0].addEventListener(Event.CONTEXT3D_CREATE,                                  onContextCreated);
    }

}
```

我们再看Starling 的构造函数：

```
public function Starling(rootClass:Class, stage:flash.display.Stage,
 viewPort:Rectangle=null, stage3D:Stage3D=null,
 renderMode:String=&quot;auto&quot;)
 {}
```

在上面的构造函数中，我们经常（也是必须）传入两个参数：
1、rootClass:一个继承自starling.display.sprite的类引用作为Starling的入口参数，即starling的文档类。
2、stage：原生Flash舞台，由Starling创建的Stage 3D 对象将位于该舞台的下一层。

这里我们继续看starling的入口类，该类继承了starling.display.sprite类，在该类的构造函数中我们可以添加starling中的显示对象，添加方法和原生的stage中的添加方法相同：

```
public class StartPage extends Sprite
 {
     public var q:Quad;

     public function StartPage()
     {
        this.addEventListener(Event.ADDED_TO_STAGE, onAddToStage);
     }

     private function onAddToStage(evt:Event):void{
         q = new Quad(200,200);

         q.setVertexColor(0, 0x000000);
         q.setVertexColor(1, 0xAA0000);
         q.setVertexColor(2, 0x00FF00);
         q.setVertexColor(3, 0x0000FF);

         q.x = stage.stageWidth - q.width &gt;&gt; 1;
         q.y = stage.stageHeight - q.height &gt;&gt; 1;

         this.addChild(q);
     }
 }
```

###二：使用硬件（GPU）加速：
一般来说显卡驱动发布日期在2009年1月1号以后的显卡才支持硬件加速，所以当电脑不支持硬件加速时，我们需要指定其为软件加速并重新指定帧率。这里我们在Startup页面中，添加代码：

```
private function onContextCreated(event:Event):void
 {
     // set framerate to 30 in software mode

     if (Starling.context.driverInfo.toLowerCase().indexOf(&quot;software&quot;) != -1)
     Starling.current.nativeStage.frameRate = 30;
 }
```

要想知道自己的机器是否支持硬件加速，则只需要按F11调试程序：
1、如果支持硬件加速，则输出：
<span style="color: #0000ff;">[Starling] Initialization complete.</span>
<span style="color: #0000ff;">[Starling] Display Driver:DirectX9Ex (Direct blitting)</span>

2、如果不支持硬件加速，则输出：

<span style="color: #0000ff;">[Starling] Initialization complete. </span>
<span style="color: #0000ff;">[Starling] Display Driver:Software (Direct blitting)</span>

三：Starling的显示列表：

Starling遵循了与原生Flash显示列表一样的规则。如图是Starling的树形图：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/7.png"><img class="alignnone size-medium wp-image-190" title="7" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/7-300x92.png" alt="" width="300" height="92" /></a>

1.Srarling无法访问Stage直到其被添加到显示列表中。Starling同样提供了这些事件，只是包名不同了而已（指向不同的类）。

<span style="color: #008000;"> Event.ADDED : 当显示对象被添加到一个容器中抛出 ；</span>
<span style="color: #008000;"> Event.ADDED_TO_STAGE : 当显示对象被添加到一个已存在于舞台上的容器中时，也就是其变得可见时抛出 ；</span>
<span style="color: #008000;"> Event.REMOVED : 当显示对象被从一个容器中移除时抛出 ；</span>
<span style="color: #008000;"> Event.REMOVED_FROM_STAGE : 当显示对象被从一个已存在于舞台上的容器中移除时，也就是其变得不可见时抛出；</span>
<pre>这样，我们就可以自行控制在特定事件内初始化某些对象和移除某些对象来提高程序性能。

2.DisplayObject：
DisplayObject的方法：
<span style="color: #008000;"> removeFromParent : 从父对象中移除，如果它有父对象的话 ；</span>
<span style="color: #008000;"> getTransformationMatrixToSpace : 创建一个用于表现本地坐标系和另一个坐标系转换关系的矩阵 ；</span>
<span style="color: #008000;"> getBounds : 得到一个以某个坐标系为参考系的能包含该显示对象的最小矩形；</span>
<span style="color: #008000;"> hitTestPoint : 返回当前坐标系中某个点位置下层次最高（挡在最前面）的显示对象 ；</span>
<span style="color: #008000;"> globalToLocal : 将一个点由舞台坐标转换为当前坐标系坐标 ；</span>
<span style="color: #008000;"> localToGlobal : 将一个点由当前坐标系坐标转换为舞台坐标；</span>

DisplayObject的属性：
<pre>Starling保留了大多数Flash种DisplayObject的属性，初次之外还添加了一些属性，如 pivotX 和pivotY属性，允许开发者在运行时动态改变DisplayObject的注册点。</pre>
<span style="color: #008000;"> transformationMatrix : 当前显示对象位置相与其父容器的转换矩阵 ；</span>
<span style="color: #008000;"> bounds : 当前显示对象在其父容器中的矩形（Rectangle）对象 ；</span>
<span style="color: #008000;"> width、height、root、x、y、scaleX、scaleY、alpha、visible、parent、stage、root：不释了，和原生 DisplayObject 一样的功能 ；</span>
<span style="color: #008000;"> rotation：当前显示对象绕其注册点的旋转弧度（非角度） ；</span>
<span style="color: #008000;"> pivotX、pivotY : 当前显示对象的注册点，默认为（0，0） ；</span>
<span style="color: #008000;"> touchable : 指定当前显示对象是否能够接受 Touch 事件（相当于原生 DisplayObject 的</span>
<span style="color: #008000;">mouseEnable，因为在 Starling中所有鼠标事件都被定义为 Touch 事件）；</span>

3.Sprite

Starling中Sprite同样是能够使用的最轻量级的容器，作为继承了DisplayObject的子类，继承了DisplayObject的所有公有属性和方法，其次也同样具有自己的方法：

<span style="color: #008000;"> addChild : 不解释，和原生Flash 中的一样，下同 </span>
<span style="color: #008000;"> addChildAt : 略 </span>
<span style="color: #008000;"> dispose : 完全销毁一个对象，释放其在 GPU 中所占内存，移除其全部事件侦听。 </span>
<span style="color: #008000;"> removeFromParent : 略 </span>
<span style="color: #008000;"> removeChild : 略 </span>
<span style="color: #008000;"> removeChildAt : 略 </span>
<span style="color: #008000;"> removeChildren : 移除一个容器中所有的子对象 </span>
<span style="color: #008000;"> getChildAt : 略</span>

<span style="color: #008000;"> getChildByName : 根据名称搜索一个子对象 </span>

<span style="color: #008000;"> getChildIndex : 略 </span>
<span style="color: #008000;"> setChildIndex : 略 </span>
<span style="color: #008000;"> swapChildren : 略 </span>
<span style="color: #008000;"> swapChildrenAt : 略 </span>
<span style="color: #008000;"> contains : 略</span>
<pre>由上面的树形图可以看出，stage对象继承自DisplayObjectContainer，所以可以用
DisplayObjectContainer的属性来设置舞台的属性，如改变颜色等。除此之外还可以通过利用[SWF]标签来设置该属性，如：
<span style="color: #008000;"> [SWF(width="1000", height="600", frameRate="60", backgroundColor="#222222" )]</span></pre>
&nbsp;

OK，这一讲中我们学习总结了Starling的创建过程及显示列表相关知识，下一讲将继续学习Starling的事件机制。
