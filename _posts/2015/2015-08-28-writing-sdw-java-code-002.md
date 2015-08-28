---
layout: page
title: 三元操作符的类型务必一致
tagline: Supporting tagline
tags: [java]
categories: [java]
comments: true

---
{% include JB/setup %}
----------

在java的命名规则中，包名犬小写，类首字母大写，常量全部大写并用下划线分隔，变量采用驼峰命名法命名：

{% highlight java%}
   public class Client {
	public static void main(String[] args) {
		int i = 80;
		String s = String.valueOf(i<100?90:100);
		String s1 = String.valueOf(i<100?90:100.0);
		System.out.println(s);//90
		System.out.println(s1);//90.0
		System.out.println("两者是否相等:"+s.equals(s1));//false
	}
   }
{% endhighlight %}


**注意：**

当三元操作符中类型不同时，会默认进行类型转换，类型转换规则如下：

+ 若两个操作数不可转换，则不做转换，返回值为Object类型；   
+ 若两个操作数是明确类型的表达式(如变量)，则按照正常的二进制数字来转换；int类型转换为long类型，long类型转换为float类型等。   
+ 若两个操作数中有一个是数字S，另一个是表达式，且其类型标示为T，那么，若数字S在T的范围内，则转换为T类型那个，若S超出了T类型的范围，则T转换为S类型。
+ 若两个操作数都是直接量数字，则范围值类型为范围较大者。   
