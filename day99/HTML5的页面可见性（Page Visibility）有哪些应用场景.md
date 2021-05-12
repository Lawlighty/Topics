##  HTML5的页面可见性（Page Visibility）有哪些应用场景

document.visibilityState属性
* 产生的原因: 不能触发unload,pageHide事件的时候
    * 手机端切换到最近任务界面,点击另一个APP,
    * 手机端直接按home键返回主屏幕;
    * PC端最小化,
* 使用的场景:
    * 停止与服务器的轮询
    * 停止页面音视频
触发的事件:document.onvisibilitychange