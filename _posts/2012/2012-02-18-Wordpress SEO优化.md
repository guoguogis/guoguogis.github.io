---
layout: post
title: Wordpress SEO优化
date: 2012-02-18 15:53
author: rguoguogis
comments: true
categories: [php]
tags: [SEO]
---
1、文章URL链接结构的优化 Permalink里面要包含postname.一般的服务器 都支持mod_rewrite功能，使用这个功能可以优化Permalink（永久链接），在Option-Permalink里的Common options里进行设置，我比较倾向于使用/%year%/%monthnum%/%postname%.html这种链接结构，一来链接目录只有两 级，利于索引，二来这种链接结构和Blogspot和Movable Type的链接结构一致，比较利于系统平滑迁移或切换。postname使用英文，如果是写英文Blog的话，系统会自动将标题的post slug做为postname.

2、文章Post Slug的优化 文章标题中最好包含文章最关键的关键字，不要使用一些没有意义的标题，对于英文Blog来讲，最好启用一个名叫SEO Slugs的插件，该插件能够自动将post slug中的the、in等“没用”的单词删除，有利于SEO.

3、文章Title的优化 WordPress默认的Title是“博客名-文章名”，这对SEO很不好，我觉得应该使用“文章名-博客名”的形式，建议安装一个名叫All in One SEO Pack的插件，可以自动将Title进行优化，并增加Descriptions和Keywords的Meta.

4、robots.txt的优化 在博客根目录下放置一个robots.txt的文件，可以指定搜索引擎只收录指定的内容。 对于WordPress来说，有一些地址是不应该被搜索引擎索引的，比如后台程序、日志文件、FEED地址等，一个针对WordPress的robots.txt的例子如下： User-agent:  Disallow: /wp- Disallow: /feed/ Disallow: /comments/feed Disallow: /trackback/

5、Sitemap的优化 对于Google搜索引擎来讲，使用Sitemap可以让搜索引擎更为有效的进行索引，安装一个名叫Sitemap Generator的插件可以自动完成Google Sitemap的生成，然后将这个地址提交到Google Webmaster即可。

6、防止垃圾留言评论 垃圾留言评论会影响Blog在搜索引擎中的表现，因此需要安装一个自动过滤垃圾留言评论的的插件，推荐使用Akismet。

7、相关文章 通过tag的标记来实现相关文章，不过我建议使用WordPress 2.3里面的tag系统来实现，那样效率会更高一些。

8、搜索引擎来源的优化 安装一个名叫Landing sites的插件，可以让那些从搜索引擎搜索过来的用户体验更好，通过这个插件能够选择显示给用户搜索关键字相关的文章。

9、不要轻易做变动 不要总是草率的变动自己的域名、博客名、链接结构、链接地址等，早期应该做全局的规划，中途进行大的变动是非常不明智的。

10、更新你的博客 记着经常更新，并且写出高质量的内容，这才是SEO中最关键的地方，写出高质量的文章，将会更容易实现SEO的目标。
