---
layout: post
title: 不要在常量和变量中出现易混淆的字母
date: 2014-08-27
author: guoguogis
comments: true
categories: [java]
tags: [java]
---
{% include JB/setup %}
----------

在java的命名规则中，包名全小写，类首字母大写，常量全部大写并用下划线分隔，变量采用驼峰命名法命名：



	code area:
	#include<iostream>
	using namespace std;
	int main(int argc, char **argv)
	{
		cout<<"Hello world!"<<endl;
		return 0;
	}


**注意：**

这里l作为长整形标志时务必用大写，否则很容易与数字1混淆，影响代码可读性。
