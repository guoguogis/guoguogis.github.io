---
layout: post
title: FlashPlayer11.2，Air3.2鼠标事件新属性试玩
date: 2012-03-07 06:49
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
距离FP 11.2发布已经快一周时间了，对于其升级版本的最大亮点：鼠标事件和右键菜单的完全屏蔽功能，我闲来无事，试玩一二：

一：FP 11.2新特性：

<strong> 多线程视频解码（Windows、Mac OS和Linux）</strong>

在Flash Player 11.2中视频解码实现了完全多线程，该功能使得个平台上的Flash性能有了显著提高。

<strong> Flash Player后台更新（Windows）</strong>

采用这种更新机制，新版能为终端用户提供更高效的更新体验（仅在正式版中提供）。

鼠标锁定，鼠标相对坐标，右键和中键单击：利用无限滚动和这些新的鼠标事件创建引人入胜的全景游戏体验，包括第一人称射击游戏。

为Windows、Mac OS和Linux桌面环境提供了runtime运行时。

放宽了硬件加速驱动支持并引入节流事件。

二、鼠标事件测试

1、换将搭建

要想使用FP11.2新功能，首先需要引入FP 11.2相对用的playerglobel.swc文件；

然后，在编译参数中添加 -swf-version=15即可；

2、测试代码：

首先，在MouseEvent中引入了右键单击和中键单击的新事件：

[code]

stage.addEventListener(MouseEvent.RIGHT_CLICK, onRightClickNow);
 stage.addEventListener(MouseEvent.MIDDLE_CLICK, onMiddleClick);

[/code]

只要侦听了鼠标右键，即右键菜单自动隐藏。

&nbsp;

还有一个就是鼠标锁定，就是将鼠标的位置保持在屏幕的一个相对特定的位置，底图的变化等都不影响该位置。

&nbsp;

&nbsp;
