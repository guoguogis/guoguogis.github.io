---
layout: page
title: Mac 下安装 jekyll
tagline: Supporting tagline
tags: [mac, jekyll]
categories: [mac]
comments: true
---
{% include JB/setup %}

> Homebrew，是Mac OS X上的软件包管理工具，我们能够通过终端方便的使用它来安装管理苹果没有自带的Unix相关工具软件,被誉为OS X不可或缺的套件管理器。

> RubyGems是一个包管理框架，提供了ruby社区gem的托管服务，用于方便地下载、安装和使用ruby软件包。ruby软件包被称为gem，包含了ruby应用或库。


## 安装 `brew`

+ 通过命令 `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` 来安装
+ 通过命令 `brew -v` 来查看版本，如果安装成功，则可以正常显示版本

## 安装 `ruby`

+ mac 默认安装了 ruby，不过仍然可以通过命令 `brew install ruby`来安装 ruby，安装过程中会提示删除默认的 ruby
+ 通过命令 `ruby -v` 来查看 ruby 版本，如果安装成功，则可以正常显示版本

## 安装 `gem`

+ 在[官网](https://rubygems.org/pages/download)来下载 gem 安装包
+ 解压并在解压目录下通过命令 `ruby setup.rb` 来安装
+ 通过命令 `gem -version` 来查看版本，如果安装成功，则可以正常显示版本

## 安装 `jekyll`

+ 通过命令 `gem install jekyll` 来安装 jeykyll
+ 通过命令 `jekyll -v` 来查看版本，如果安装成功，则可以正常显示版本

## 使用 `jekyll`

+ 通过命令 `jekyll build` 来编译项目
+ 通过命令 `jekyll serve` 来启动服务，默认通过 `http:127.0.0.1:4000` 来访问服务
  

- - -
  


