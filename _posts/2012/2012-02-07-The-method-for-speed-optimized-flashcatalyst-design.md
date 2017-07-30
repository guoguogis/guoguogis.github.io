---
layout: post
title: 为通过FlashCatalyst设计的网页提速优化的方法
date: 2012-02-07 05:59
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
由于通过Photoshop,Illustrate,Fireworks设计的草图文件用到的资源（图片等）都比较大，而在网页上显示比较慢，所以通过FlashCatalyst将草图转换为网页时需要进行一定的优化，具体方法有：将矢量图形转化为位图、压缩图形资源、把嵌入的图片转化为连接图片。

1、Optimize vector graphics(优化矢量图形)：把选中的图形编译成低级别的Flash对象，这样就可以在运行时更加快速的显示。一旦优化了矢量图形，在FlashCatalyst中就不再可以编辑比划和填充等属性了，被优化的矢量图形文件，所有的MXML信息都分别保存在了FXG文件里了。

2、Rasterize(栅格化)：把一固定的矢量图形或者输入文本转化为位图。它会把画布上的图片替换成PNG文件，然后复制到“库”面板里，这个选项经常被使用在优化固定矢量图或者文本文件当中。

3、Compress(压缩):压缩优化位图，压缩后将自动生成质量较低的位图副本，并保存到资源库中，如果这个位图是使用渐变效果的话，压缩操作将使渐变效果失效。

4、Convert To Linked Image(把程序嵌入图片转换成链接图片):默认情况下FlashCatalyst导入 的图片资源会在你发布时被嵌入到应用程序中的。链接图片可以帮助你缩小应用程序的体积，这样图片在发布时就不会被编辑到swf文件里去，而是程序的外部，这样程序就可以i运行时动态加载这张图片了。
