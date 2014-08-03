---
layout: post
title: Flex中UIComponent的生命周期
date: 2012-04-19 04:14
author: root
comments: true
categories: [flash]
tags: [UIComponent, 生命周期]
---
在UIComponent的生命周期中，Flex会依序调用 createChildren，commitProperties，measure，layoutChrom和updateDisplayList方法， 这些方法依次完成了各自专有的任务，其中方法commitProperties，measure和updateDisplayList会在 UIComponet创建后，调用invalidateProperties,invalidateSize和 invalidateDisplayList方法后，在下一帧时再次被调用。
