---
layout: post
title: FlashBuilder 4.5创建的项目在导入FlashBuilder4.6后报错的处理
date: 2012-02-09 06:11
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
将FlashBuilder4.5创建的移动项目，基于SDK4.5导入到FlashBuilder4.6后报错：

>应用程序描述符文件的命名空间 2.6 不得低于 Flex SDK 所需的最低版本 3.1。

这时只需要将对应的app.xml中的第二句中的2.6修改为3.1即可。