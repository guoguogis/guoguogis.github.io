---
layout: post
title: Starling 框架学习总结一 之 初识及安装篇
date: 2012-02-27 07:09
author: guoguogis
comments: true
categories: [flash]
tags: [GPU, Stage 3D, Starling]
---
本文是个人学习Starling框架过程中总结的一些知识点，对于一些概念的理解请以官方注释为主，所谓学习就是参考了较多的别人的博客内容，所以有外链的我会及时加上。OK，从初识Starling开始：

###一：何为Starling？

Starling是一个基于Stage 3D 所开发的一个能够使用GPU来加速的2D Flash应用程序的ActionScript 3框架。其最大的有点事可以很快的写出使用GPU加速的应用程序而不必接触那些复杂的底层Stage3D API。

###二：Starling下载及安装：

Starling 开发包可以到其官网下载：http://www.starling-framework.org/，官网还提供了一些演示Demo。

下载到开发包解压后我们可以看到示例、测试及源码包：

<img class="alignnone size-medium wp-image-176" title="1" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/1-300x92.png" alt="" width="300" height="92" />

###三：安装及运行示例：

1.在创建Starling Lib的库项目，将下载的Starling框架中的starling/src文件夹下的文件COPY到库文件夹中的src下，如下图所示：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/2.png"><img class="alignnone size-medium wp-image-177" title="2" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/2-300x133.png" alt="" width="300" height="133" /></a>

注意：我这里这么做的目的是为了调试方便。

2.创建Starling Example 的ActionScript项目，将Starling框架中samples/demo中的src和media文件夹Copy到该项目中，如图所示：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/3.png"><img class="alignnone size-full wp-image-178" title="3" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/3.png" alt="" width="276" height="209" /></a>

3.将Starling Lib库项目添加到Starling Example项目中，运行Starup.as则可看到流畅的效果，如下图所示：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/4.png"><img class="alignnone size-medium wp-image-179" title="4" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/4-199x300.png" alt="" width="199" height="300" /></a>

注意：因为这里是通过Stage 3D来加速的，所以要在index.template.html中添加：<span style="color: #ff0000;"> params.wmode="direct";</span>

###四：Starling 工作原理：

由于Starling是基于Stage 3D的API开发的，所以它的驱动关系位于Stage 3D之上，而Stage 3D有能力调用OPEN GL、DirectX这些电脑显卡驱动或者OPEN GLES2这些手机显卡驱动，最终由这些显卡驱动去驱动GPU进行工作。

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/51.png"><img class="alignnone size-medium wp-image-181" title="5" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/51-300x141.png" alt="" width="300" height="141" /></a>

GPU渲染三角形很高效，利用纯Stage 3D API来渲染一个MovieClip则需要创建两个三角形然后贴上纹理才能实现，虽然这种直接调用Stage 3D的方式具有更大的灵活性，但是却具有较高的开发难度。然而Starling 框架本身已经实现了这些底层操作，我们只需要类似于AS3的方式简单的调用其方法则可实现同样的功能。

###五：Stage 3D的显示列表：

右键上面的例子并选中“显示重绘区域”，则可以看到这些例子跟我们传统的例子有所不同：主场景中不再显示重绘区域的红框框，这是为什么呢？

原来Stage 3D的渲染、混合权都讲给了GPU来负责，Stage 3D的显示列表不同于传统的Flash原生显示列表，Stage 3D不同于原生的Flash中的Stage，而是一套全新的渲染机制。


需要注意的是：GPU的显示层次是位于传统的显示列表之下的，即传统的显示列表中的显示内容都要挡住Stage 3D中的显示内容。他们的层次关系如下图所示：

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/6.png"><img class="alignnone size-medium wp-image-185" title="6" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/6-300x298.png" alt="" width="300" height="298" /></a>


OK，到这里我们不仅正常跑出来了Starling自带的Demo，还搞懂了Starling的工作原理，算是入门了，下节我们将继续更深入的学习Starling。
