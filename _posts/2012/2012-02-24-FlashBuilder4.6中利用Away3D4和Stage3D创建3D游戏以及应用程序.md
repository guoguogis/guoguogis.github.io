---
layout: post
title: FlashBuilder4.6中利用Away3D-4和Stage3D创建3D游戏以及应用程序
date: 2012-02-24 04:44
author: guoguogis
comments: true
categories: [flash]
tags: [Away 3D, Stage 3D]
---
利用FB4.6建立3D项目前，总结有下面几点需要注意：

1.创建AS3项目，在编译参数中设置：*-swf-version=13*，这点确保编译成正确的SWF文件，并保证能正常使用Stage3D相关的GPS加速功能。

2.在模板文件中添加代码：params.wmode = "direct";，否则会报错：Context3D 不可用。

3.下载最新的Away 3D源码，通过建立库文件或者直接引入项目都可以，这里建议建立库项目，因为这样可以在多个项目中同时引用一个库项目，并且可以进行联调，最关键的是能维护一个比较稳定的版本。

准备好前面的步骤之后，保证工程能正常启动，然后动手创建自己的3D场景了，具体代码如下：

```
package
{
    import away3d.Away3D;
    import away3d.containers.View3D;
    import away3d.loaders.Loader3D;
    import away3d.loaders.parsers.Parsers;
    import away3d.events.LoaderEvent;

    import flash.display.Sprite;
    import flash.events.Event;
    import flash.net.URLRequest;

    public class Away3DTest extends Sprite
    {
        public var _view:View3D;
        private var _loader:Loader3D;

        public function Away3DTest()
        {
            _view = new View3D();
            _view.backgroundColor = 0x666666;

            //启用锯齿消除功能
            _view.antiAlias = 4;
            this.addChild(_view);
            this.addEventListener(Event.ENTER_FRAME, onEnterFrame);

            //加载模型
            Parsers.enableAllBundled();
            _loader = new Loader3D();
            _loader.addEventListener(LoaderEvent.RESOURCE_COMPLETE, onResourceComplete);
            _loader.addEventListener(LoaderEvent.LOAD_ERROR, onLoadError);
            _loader.load( new URLRequest('vase.awd') );
            }

            private function onEnterFrame(ev : Event) : void
            {
            _loader.rotationY = stage.mouseX - stage.stageWidth/2;
            _view.camera.y = 3 * (stage.mouseY - stage.stageHeight/2);
            _view.camera.lookAt(_loader.position);
            _view.render();
        }

        private function onLoadError(ev : LoaderEvent) : void {
            trace('Could not find', ev.url);
            _loader.removeEventListener(LoaderEvent.RESOURCE_COMPLETE, onResourceComplete);
            _loader.removeEventListener(LoaderEvent.LOAD_ERROR, onLoadError);
            _loader = null;
        }

        private function onResourceComplete(ev : LoaderEvent) : void {
            _loader.removeEventListener(LoaderEvent.RESOURCE_COMPLETE, onResourceComplete);
            _loader.removeEventListener(LoaderEvent.LOAD_ERROR, onLoadError);
            _view.scene.addChild(_loader);
        }
    }
}

```

