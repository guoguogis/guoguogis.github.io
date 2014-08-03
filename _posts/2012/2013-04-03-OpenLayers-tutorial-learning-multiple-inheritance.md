---
layout: post
title: OpenLayers 2.12学习教程 之 多重继承
date: 2013-04-03 16:04
author: root
comments: true
categories: [HTML5]
tags: [Openlayers]
---
前面说过javascript实现继承，常采用原型继承，但是原型继承只能实现单一继承，不能实现多重继承。那么Openlayers是怎样实现多重继承的呢？

我们可以看到在Openlayers的源码的BaseType文件夹中有一个Class.js文件：

```
OpenLayers.Class = function() {
    var len = arguments.length;
    var P = arguments[0];
    var F = arguments[len-1];

    var C = typeof F.initialize == &quot;function&quot; ?
        F.initialize :
        function(){ P.prototype.initialize.apply(this, arguments); };

    if (len > 1) {
        var newArgs = [C, P].concat(
        Array.prototype.slice.call(arguments).slice(1, len-1), F);
        OpenLayers.inherit.apply(null, newArgs);
    } else {
        C.prototype = F;
    }
    return C;
};

OpenLayers.inherit = function(C, P) {
    var F = function() {};
    F.prototype = P.prototype;
    C.prototype = new F;
    var i, l, o;
    for(i=2, l=arguments.length; i<l; i++) {
        o = arguments[i];
        if(typeof o === &quot;function&quot;) {
            o = o.prototype;
        }
        OpenLayers.Util.extend(C.prototype, o);
   }
};

OpenLayers.Util = OpenLayers.Util || {};
OpenLayers.Util.extend = function(destination, source) {
     destination = destination || {};
     if (source) {
         for (var property in source) {
             var value = source[property];
             if (value !== undefined) {
                destination[property] = value;
             }
          }

        var sourceIsEvt = typeof window.Event == &quot;function&quot;
        &amp;&amp; source instanceof window.Event;

        if (!sourceIsEvt
            &amp;&amp; source.hasOwnProperty &amp;&amp; source.hasOwnProperty(&quot;toString&quot;)) {
            destination.toString = source.toString;
        }
    }
    return destination;
};
```

上面代码可以实现Openlayers内的多重继承，这里我将上面代码稍作修改，然后做一个多重继承的示例。

由于Openlayers中将所有的类都写在了"Openlayers"命名空间下，具体原因请看该系列文章之 命名空间。而我们这里为了便于理解并不破坏Openlayers中结构的情况下，我们拷贝一份Class.js并直接将该文件中的所有的OpenLayers修改为window，如下代码所示：

```
    window.Class = function() {
        var len = arguments.length;
        var P = arguments[0];
        var F = arguments[len-1];

        var C = typeof F.initialize == &quot;function&quot; ?
            F.initialize :
            function(){ P.prototype.initialize.apply(this, arguments); };

        if (len > 1) {
            var newArgs = [C, P].concat(
            Array.prototype.slice.call(arguments).slice(1, len-1), F);
            window.inherit.apply(null, newArgs);
        } else {
            C.prototype = F;
        }
    return C;
};
```

在Class.js中继续构造我们实际的类以及子类：

```
window.Person=window.Class({
    //姓名
    name:'',
    //年龄
    age:0,
    //工作
    job:'',

    getName:function(){
        return name;
    },
    setName:function(strName){
        name = strName;
    },

    //初始化方法
    initialize:function(){

    }

});


window.Student = window.Class(window.Person,{
    //学校
    school:'',
    //年级
    level:'',

    //初始化方法
    initialize:function(){

    }
});


window.Worker = window.Class(window.Person,{
    //工作类型
    workType:'',
   //工作时间
    workTime:''

});


window.PartTimeStudent_Worker = window.Class(window.Student,window.Worker,{
    //兼职的天数
    partTimeDays:0
});
```
如上代码，我们构造父类Person,构造Student和Worker继承自Person,而PartTimeStudent_Worker又多重继承了Student,Worker。

我们在引用该js文件，并构造输出对象，代码为:

```
<!DOCTYPE html>
<html>
<head>
<title>Class实现的多重继承</title>
<meta charset=&quot;utf-8&quot; /><!--注意：尽量将html编码和JS编码格式保持一致-->
<script type=&quot;text/javascript&quot; src=&quot;Class.js&quot;></script>

<script type=&quot;text/javascript&quot;>
    var person1 = new Person();
    var student1 = new Student();
    var partTimeStuWorker = new PartTimeStudent_Worker();

    console.log(person1);
    console.log(student1);
    console.log(partTimeStuWorker);
</script>
</head>
<body>

</body>
</html>
```

我们在Chrome中运行代码，可以看到输出结果：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/person.jpg"><img class="size-medium wp-image-523" alt="Person类实例" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/person-300x52.jpg" width="594" height="102" /></a> Person类实例

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/Student.jpg"><img class="size-medium wp-image-524" alt="Student类实例" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/Student-300x75.jpg" width="606" height="151" /></a> Student类实例

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/partTimeWorker.jpg"><img class="size-medium wp-image-525" alt="PartTimeStudent_Worker类实例" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2013/04/partTimeWorker-300x129.jpg" width="616" height="264" /></a> PartTimeStudent_Worker类实例

结论：由上面运行效果截图可以看到PartTimeStudent_Worker实例继承了Student,Worker的属性和方法。