---
layout: post
title: AngularJS API HELP
tagline: Supporting tagline
tags: [AngularJS]
categories: [FE]
---
{% include JB/setup %}

-------------
## directive *ng*

+ a

 htmlAnchorDirective:修改html的a元素，当herf为空时，禁止了默认的操作；

{% highlight HTML%}
<div>
    <a href="">默认a</a>
</div>
<div ng-app>
    <a href="">angularJS-a</a>
</div>
{% endhighlight %}

 “默认a”标签在点击时会刷新页面,“angularJS-a”标签不进行刷新,使得在AngularJS定义的作用域中使用:

{% highlight HTML%}
<a href="" ng-click="list.addItem()">Add Item</a>
{% endhighlight %}

来创建动作链接。

+ form
+ input
+ input *checkbox*
+ input *email*
+ input *number*
+ input *radio*
+ input *text*
+ input *url*
+ ngApp
+ ngBind
+ ngBindHtmlUnsafe
+ ngBindTemplate
+ ngChange
+ ngChecked
+ ngClass
+ ngClassEven
+ ngClassOdd
+ ngClick
+ ngCloak
+ ngController
+ ngCsp
+ ngDblclick
+ ngDisabled
+ ngForm
+ ngHide
+ ngHref
+ ngInclude
+ ngInit
+ ngList
+ ngModel
+ ngMousedown
+ ngMouseenter
+ ngMouseleave
+ ngMousemove
+ ngMouseover
+ ngMouseup
+ ngMultiple
+ ngNonBindable
+ ngPluralize
+ ngReadonly
+ ngRepeat
+ ngSelected
+ ngShow
+ ngSrc
+ ngStyle
+ ngSubmit
+ ngSwitch
+ ngTransclude
+ ngView
+ script
+ select
+ textarea


## filter
+ currency
+ date
+ filter
+ json
+ limitTo
+ lowercase
+ number
+ orderBy
+ uppercase


## service

+ $anchorScroll
+ $cacheFactory
+ $compile
+ $controller
+ $document
+ $exceptionHandler
+ $filter
+ $http
+ $httpBackend
+ $interpolate
+ $locale
+ $location
+ $log
+ $parse
+ $q
+ $rootElement
+ $rootScope
+ $route
+ $routeParams
+ $templateCache
+ $timeout
+ $window


## Types

+ Module
+ Attributes
+ Scope
+ FormController
+ NgModelController


## global APIs

+ angular.bind

 通过angular.bind可以将一个函数的执行上下文绑定到指定对象的执行上下文上。<br/>
 @param {Object} 方法要被绑定到的指定执行上下文;<br/>
 @param {function()} 方法体;<br/>
 @param {arguments...} 方法所调用的可选参数;<br/>
 @returns {function()} 返回方法的指定执行;<br/>

{% highlight javascript%}
var obj = { 
    name: 'A nice demo', 
    fx: function() { 
        console.log(this);
        console.log(this.name); 
    } 
}; 
window.name = 'I am such a beautiful window!'; 
function runFx(f) { 
    f(); 
} 

var fx2 = angular.bind(obj,obj.fx);
var fx3 = obj.fx.bind(obj); 
             
runFx(obj.fx); 
runFx(fx2); //a nice demo
runFx(fx3); //a nice demo
{% endhighlight %}

输出结果：

 
Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…}
I am such a beautiful window!

Object {name: "A nice demo", fx: function}
A nice demo 

Object {name: "A nice demo", fx: function}
A nice demo 


 ECMAScript5也提供了bind原生方法，fx3为原生*bind*方法设置函数的执行上下文，目前该原生方法不支持IE6,7,8;<br/>
 jQuery,protorype中都提供了类似方法.<br/>

+ angular.bootstrap

 通过该方法手动开始angular应用程序;<br/>
 @param {DOMElement} 被定义为Angular根的DOM元素.<br/>
 @param {Array} 需要加载到应用中的模块.
    数组中的每一项应该是预定义的或者被注入了的；
    调用的函数应该是被注入可执行的程序块；<br/>
 @param {Object} 用于定义应用程序的配置选项的配置对象. 
    *支持一下关键字*：
    strictDi: 禁用了function的注释.<br/>
 @returns {auto.$injector} 返回一个最新创建的injector.<br/>


&lt;!doctype html&gt;
&lt;html lang="zh"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;directive-a&lt;/title&gt;
    &lt;script type="text/javascript" src="../../bin/angular1.3.0b08.js"&gt;&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
    &lt;div ng-controller="WelcomeController"&gt;{{greeting}}&lt;/div&gt;

    &lt;script type="text/javascript"&gt;
            var app = angular.module('demo', [])
            .controller('WelcomeController', function($scope) {
                $scope.greeting = 'Welcome!';
            });
            angular.bootstrap(document, ['demo']);
        &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
  

> note:这里是手动启动angular,所以不能用ng-app指令，否则报错。

+ angular.copy

 实现js的深拷贝。

> JS深拷贝：在JS中对于数组或者对象的拷贝(赋值)后，两个对象实质上指向了同一堆地址，要想实现拷贝后两个对象中属性变化互不影响则需要js的深拷贝；

浅拷贝示例：

{% highlight javascript%}
var arr1 = [1,2,3,4];
var arr2 = arr1;
arr2[0] = 5;

console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);
{% endhighlight %}

输出：


 true 
 [5, 2, 3, 4] 
 [5, 2, 3, 4] 


可以看到：arr1,arr2的赋值互相影响。

原生实现深拷贝示例：js中通过*slice*、*concat*方法实现；

{% highlight javascript%}
var arr1 = [1,2,3,4];
var arr3 = arr1.slice(0);
var arr4 = arr1.concat();
arr3[0] = 5;
arr4[0] = 5;

console.log(arr1 === arr3);
console.log(arr1);
console.log(arr3);

console.log(arr1 === arr4);
console.log(arr1);
console.log(arr4);
{% endhighlight %} 

输出：


 false 
 [1, 2, 3, 4] 
 [5, 2, 3, 4] 
 false 
 [1, 2, 3, 4] 
 [5, 2, 3, 4] 


可以看到：arr1,arr3,arr4的赋值互不影响。

AngularJS实现深拷贝示例：

{% highlight javascript%}
var arr1 = [1,2,3,4];
arr5 = angular.copy(arr1);
arr5[0] = 5;
console.log(arr1 === arr5);
console.log(arr1);
console.log(arr5);
{% endhighlight %}

输出：


 false 
 [1, 2, 3, 4] 
 [5, 2, 3, 4] 


可以看到：arr1,arr5的赋值互不影响。

+ angular.element
+ angular.equals
+ angular.extend
    
 *继承*，将src中的所有属性挂载到des对象上;

{% highlight javascript%}
var des = {};
var srcs = {
    name: 'misko', 
    gender: 'male',
    geter: function(){     
    }
};
angular.extend(des, srcs);
console.log(des);
{% endhighlight %}

输出：


{gender: "male",geter: function (){},name: "misko"}


+ angular.forEach

 遍历对象或者数组并对每一项相应相应的操作;

{% highlight javascript%}
    var values = {name: 'misko', gender: 'male'};
    var log = [];
    angular.forEach(values, function(value, key){
       this.push(key + ': ' + value);
    }, log);
{% endhighlight %}

输出结果为:


["name:misko",
"gender:male"]


+ angular.fromJson

 将字符串转换为json对象；
 实现代码为：<br/>

{% highlight javascript%}
function fromJson(json) {
    return isString(json) ? JSON.parse(json) : json;
}
{% endhighlight %}

使用：

{% highlight javascript%}
var jsonStr = '{"employees": [{ "firstName":"Bill" , "lastName":"Gates" },{ "firstName":"George" , "lastName":"Bush" },{ "firstName":"Thomas" , "lastName":"Carter" }]}';
var jsonObj = angular.fromJson(jsonStr);

console.log(jsonObj);
{% endhighlight %}

从实现代码可以看到，利用了JSON.parse来实现，该方法支持IE8及以上浏览器，[详见](http://caniuse.com/#feat=json);

+ angular.identity

 该function返回第一个参数；

{% highlight javascript%}
function identity($) {
    return $;
}
{% endhighlight %}

+ angular.injector

 每一个AngularJS应用都有一个注入器(injector)<br>用来处理依赖的创建。注入器是一个负责查找和创建依赖的服务定位器。<br>
 @param {Array}***modules*** 模块方法体或别名组成的数组列表. ‘ng’模块必须添加。<br>
 @returns {function()} 注入器构造方法.<br>

> 在某些情形中你会发现你想要创建你自己的$injector而不是使用AngularJS在引导启动时自动创建的$injector。例如，在你不想要单体service实例的单元测试中，创建一个你自己的injector是很有用的。你可以使用angular.injector方法来创建一个你自己的injector。

{% highlight javascript%}
// create an injector
var $injector = angular.injector(['ng']);

// use the injector to kick off your application
// use the type inference to auto inject arguments, or use implicit injection
$injector.invoke(function($rootScope, $compile, $document){
    $compile($document)($rootScope);
    $rootScope.$digest();
});
{% endhighlight %}

<p style="color:red"><strong>还需要深入研究</strong></p>

+ angular.isArray

 判断是否为数组。<br/>
 实现代码：
    
{% highlight javascript%}
function isArray(value) {
    return toString.call(value) === '[object Array]';
}
{% endhighlight %}

这种方式可以判断同一页面中的变量是否为数组，但不包含iframe的情形。

+ angular.isDate

 判断是否为日期类型。<br/>
 实现代码：

{% highlight javascript%}
function isDate(value) {
    return toString.call(value) === '[object Date]';
}
{% endhighlight %}

实例：

{% highlight javascript%}
var date = new Date();
var time = date.getTime();
var myDate=new Date();
myDate.setFullYear(2008,7,9);

console.log(Date.now());//1402912337564
console.log(date);//Mon Jun 16 2014 17:52:17 GMT+0800 (澳大利亚西部标准时间) 
console.log(myDate);//Sat Aug 09 2008 17:52:17 GMT+0800 (澳大利亚西部标准时间) 

console.log(angular.isDate(Date.now()));//false
console.log(angular.isDate(time));//false
console.log(angular.isDate(date));//true
console.log(angular.isDate(date));//true
{% endhighlight %}

注意：Date.now()返回毫秒数，所以不是日期类型。

+ angular.isDefined

 判断基本类型变量是否定义。
 代码实现：

{% highlight javascript%}
function isDefined(value) {
    return typeof value !== 'undefined';
}
{% endhighlight %}

+ angular.isElement

 判断是否为DOM元素。

 实例代码：

{% highlight javascript%}
console.log(angular.isElement(document));//true
console.log(angular.isElement(document.body));//true
console.log(angular.isElement(document.getElementById('aaa')));//true   
{% endhighlight %}

+ angular.isFunction

 判断是否为函数类型；

{% highlight javascript%}
function isFunction(value) {
    return typeof value === 'function';
}
{% endhighlight %}

+ angular.isNumber

 判断是否为数字类型：

{% highlight javascript%}
function isNumber(value) {
    return typeof value === 'number';
}    
{% endhighlight %}

+ angular.isObject

 判断是否为对象；

{% highlight javascript%}
function isObject(value) {
    if(value != null){
        return typeof value === 'object';
    }else{
        return false;
    }
}    
{% endhighlight %}

 这里排除了value == null的情况。

+ angular.isString

 判断是否为字符串；

{% highlight javascript%}
function isString(value) {
    return typeof value === 'string';
}
{% endhighlight %}

+ angular.isUndefined

 与isDefined返回值相反；

{% highlight javascript%}
function isUndefined(value) {
    return typeof value === 'undefined';
}
{% endhighlight %}

+ angular.lowercase

 将字符串所有字符转换为小写；

{% highlight javascript%}
var lowercase = function(string) {
    return isString(string) ? string.toLowerCase() : string;
};
{% endhighlight %}

+ angular.mock

 用于测试。

+ angular.module
   
 *创建/获取模块*:  
 When passed two or more arguments, a new module is created.  If passed only one argument, an existing module (the name passed as the first argument to `module`) is retrieved.<br/>
 以上为：“当传递两个及以上参数时，创建一个模块，当传递一个参数时，调用已经存在的模块！”

+ angular.noop

一个空函数，在编写代码时使用；

{% highlight javascript%}
  function noop() {}
{% endhighlight %}

+ angular.toJson

 将对象、数组、string、number等转换成json字符串，当未定义时返回undefine;

{% highlight javascript%}
function toJson(obj, pretty) {
    if (typeof obj === 'undefined')
        return undefined;
    return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
}
{% endhighlight %}

+ angular.uppercase

 将字符串的所有字符大写输出；

+ angular.version

 angular的版本号；

+ module


## ngMock

#### service
+ $exceptionHandler
+ $httpBackend
+ $log
+ $timeout

#### global APIs
+ angular.mock.dump
+ angular.mock.inject
+ angular.mock.module
+ angular.mock.TzDate
+ module


## AUTO

#### service
+ $injector
+ $provide


## ngCookies
#### service
+ $cookies
+ $cookieStore


## ngMockE2E
#### service
+ $httpBackend


## ngResource
#### service
+ $resource


## ngSanitize
#### directive
+ ngBindHtml
#### filter
+ linky
#### service
+ $sanitize


---------------------
edit by jeosea at 2014.06.18
