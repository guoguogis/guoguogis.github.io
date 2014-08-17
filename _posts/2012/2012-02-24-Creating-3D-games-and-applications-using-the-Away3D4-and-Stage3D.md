---
layout: post
title: FlashBuilder4.6中利用Away3D4和Stage3D创建3D游戏以及应用程序
date: 2012-02-24 04:44
author: guoguogis
comments: true
categories: [flash]
tags: [Away3D, Stage3D]
---
利用FB4.6建立3D项目前，总结有下面几点需要注意：
1.创建AS3项目，在编译参数中设置：-swf-version=13，这点确保编译成正确的SWF文件，并保证能正常使用Stage3D相关的GPS加速功能。
2.在模板文件中添加代码：params.wmode = "direct";否则会报错：Context3D 不可用。
3.下载最新的Away 3D源码，通过建立库文件或者直接引入项目都可以，这里建议建立库项目，因为这样可以在多个项目中同时引用一个库项目，并且可以进行联调，最关键的是能维护一个比较稳定的版本。
