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
