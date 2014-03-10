---
layout: post
title: 自己倒腾静态文本博客记-导入wordpress博文
date: 2014-03-07
author: guoguogis
comments: true
categories: [lessons]
tags: [jekyll,wordpress]
---
###导出步骤：
wordpress中导出xml数据；

运行``wpXml2Jekyll.exe``可在[这儿](http://pan.baidu.com/s/1mgLnrGc)下载，运行后指定1步骤中导出的xml文件和转换目录；

得到转换的md文件，检查文件正确性并逐个导入到_post文件夹下；


###问题：
####"\xAE\xA1" from GBK to UTF-8
问题原因：permalink: /:categories/:year/:month/:day/:title中文编码导致，不知道具体问题在哪儿，只能通过规避的方式解决；
方案1：访问路径不出现中文，如上格式最容易在categories和title上出现中文问题，即在每篇文章的categories和title中不出现中文即可；
