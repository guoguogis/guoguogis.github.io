---
layout: post
title: 利用FlashBuilder for PHP创建Flex+PHP项目
date: 2012-02-02 05:18
author: root
comments: true
categories: [flash,flex]
tags: [flash,php]
---

一、安装FLashBuilder for PHP

安装完成后初始化界面如下图所示：

<img title="Flash Builder for PHP 默认工作空间 " src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/flashbuilder/articles/streamline-flex-php-development/fig05.jpg" alt="Flash Builder for PHP 默认工作空间 " />

二、建立FLEX+PHP项目

1、新建项目：

<img title="创建新项目的新选项 " src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/flashbuilder/articles/streamline-flex-php-development/fig07.jpg" alt="创建新项目的新选项 " />

由于Flex是前段展示部分，而PHP是后台服务代码，要将两部分代码进行关联，则需要将两部分代码输入路径指向服务容器。所以在新建项目前需要首先安装PHP服务容器，可以是ZendServer等，我这里安装AppServer套件。

首先是新建PHP服务端项目，指定路径和服务容器路径：

<img title="配置Flex项目详细信息 " src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/flashbuilder/articles/streamline-flex-php-development/fig09.jpg" alt="配置Flex项目详细信息 " />

随后新建Flex客户端项目：

<img title="配置Flex项目详细信息 " src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/flashbuilder/articles/streamline-flex-php-development/fig09.jpg" alt="配置Flex项目详细信息 " />

在该项目中，你将发现 Flex的 输出文件夹（public/bin-debug/)）。 相应的SWF 文件将包含于一个 HTML 页面和一个PHP 页面，你可以使用其中任意一个页面。完成之后打开客户端项目的主文件：

<img title="工作空间中的两个项目 " src="http://wwwimages.adobe.com/www.adobe.com/content/dam/Adobe/en/devnet/flashbuilder/articles/streamline-flex-php-development/fig10.jpg" alt="工作空间中的两个项目 " />

三、建立Flex+PHP关联的项目

新建完项目之后，在服务端创建文件：AuthorsService.php

[code lang="php"]
 &lt;?php
 class AuthorsService {
public function getData() {
//in a real world application you would use a database
//and return the result set for example
$ret = array();
           $ret[] = array('id'=&gt;1, 'firstname' =&gt; 'Dantes', 'lastname' =&gt; 'Aligherie');
$ret[] = array('id'=&gt;2, 'firstname' =&gt; 'Niccolo', 'lastname' =&gt; 'Machiavelli');
$ret[] = array('id'=&gt;3, 'firstname' =&gt; 'William', 'lastname' =&gt; 'Shakespeare');
$ret[] = array('id'=&gt;4, 'firstname' =&gt; 'Kevin', 'lastname' =&gt; 'Hoyt');
$ret[] = array('id'=&gt;5, 'firstname' =&gt; 'Paul', 'lastname' =&gt; 'Trani');
$ret[] = array('id'=&gt;6, 'firstname' =&gt; 'Renaun', 'lastname' =&gt; 'Erickson');
$ret[] = array('id'=&gt;7, 'firstname' =&gt; 'Ryan', 'lastname' =&gt; 'Stewart');
$ret[] = array('id'=&gt;8, 'firstname' =&gt; 'Mark', 'lastname' =&gt; 'Doherty');
$ret[] = array('id'=&gt;9, 'firstname' =&gt; 'Mihai', 'lastname' =&gt; 'Corlan');
$ret[] = array('id'=&gt;10, 'firstname' =&gt; 'Terry', 'lastname' =&gt; 'Ryan');
           return $ret;
  }
  //update the entry
  public function updateData($author) {
return $author;
  }
  //add a new entry
 public function addData($author) {
return $author;
 }
  //delete the entry
public function deleteData($author) {
return $author;
 }
}
?&gt;
[/code]

好了，由于FlashBuilder for PHP注册码比较难找，这里贴上一个：
1499-4181-9296-6452-2998-3656
