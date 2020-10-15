# HTML基础

## 1.常见浏览器有哪些？哪些内核？

>浏览器：360浏览器、Chrome浏览器、Firefox浏览器、IE浏览器、Safari浏览器、Opera浏览器    
>内核：Trident、Gecko、Presto、Webkit、KHTML     
>
## 2.doctype有什么作用？怎么写？

>doctype是目前最推荐的HTML5文档类型声明  
>作用：   
>1.告诉浏览器你的语法   
>2.可能还会影响到JS的功能   
>写法： 
> 
>      <!DOCTYPE html>  

## 3.页面出现了乱码，是怎么回事？如何解决？   

>网页乱码出现通常是因为网页开发者没有按照规范来设置网页编码，浏览器打开这类网页的时候   
>自动安装默认的编码来打开导致的。
>
>解决办法:  
>在meta标签里面加上charset="utf-8"
>
>     <head>
>       <meta charset=utf-8" />
>     <head>
>

## 4.meta 的 name属性和http-equiv 属性哪些常见的值？

### http-equiv：    
>1.Content-Type（内容类型）  
>告诉浏览器当前访问的资源类型 并声明编码    
>
>     <meta http-equiv="Content-Type" content="text/html; charset=gb2312" /> 
>
>2.refresh（重定向）    
>重定向（以下示例5秒后会跳转到：http://baidu.com）
>
>     <meta http-equiv="refresh" content="5;url="http://baidu.com" />
>
>3.Set-Cookie（cookie设定） 
>网页过期则cookie将会被删除(必须是GMT的时间格式)    
> 
>      <meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Wednesday,
>      21-Oct-98 16:14:21 GMT;path=/">
>
>4.Window-target（窗口设置）  
>  
>强制页面在当前窗口以独立页面显示----用来防止别人在框架里面调用你的页面     
>
>      <meta http-equiv="Window-target" content="_top">
>
>5.expires(期限)    
>用于设定网页的到期时间，一旦网页过期，必须到服务器上重新调阅(必须使用GMT的时间格式)
>
>     <meta http-equiv="expires" content="Wed, 26 Feb 2016 08:21:57GMT">
>
>6.Pragma(cache模式)    
>禁止浏览器从本地机的缓存中调阅页面内容(访问者无法脱机浏览)
>
>     <meta http-equiv="Pragma" content="no-cache">

>
>


### name：
>1.keywords     
>页面的关键字，是写给搜索引擎看的，关键字可以有多个用 ‘,’号隔开
>
>     <meta name="keywords" content="HTML,CSS,JAVASCRIPT,PHP">
>   
>2.description      
>页面的描述，是写给搜索引擎看的，关键字可以有多个用 ‘,’号隔开
>
>     <meta name="description" content="html meta标签大全,整理一下加强记忆">
>
>3.robots(机器人向导)   
>robots用来告诉搜索机器人，哪些页面需要索引，哪些不需要。   
>用来阻止搜索引擎获取拷贝页面、私密页面和未完成的页面。
>
>     <meta name="robots" content="none">
>content：      
>
>&nbsp;&nbsp;&nbsp;&nbsp;all：默认值，文件将被检索，且页面上的链接可以被查询；  
>&nbsp;&nbsp;&nbsp;&nbsp;none：文件将不被检索，且页面上的链接不可以被查询；     
>&nbsp;&nbsp;&nbsp;&nbsp;index：文件将被检索；  
>&nbsp;&nbsp;&nbsp;&nbsp;follow：页面上的链接可以被查询；   
>&nbsp;&nbsp;&nbsp;&nbsp;noindex：文件将不被检索；  
>&nbsp;&nbsp;&nbsp;&nbsp;nofollow：页面上的链接不可以被查询。   

>4.author(作者)     
>标注网页的作者
>
>     <meta name="author" content="johnson">
>
>

## 5.列出常见的标签，并简单介绍这些标签用在什么场景。

>h1-h6  1级标题到6级标题     
>p  段落    
>ul>li 无序列表     
>ol>li 有序列表     
>table 表格     
>em 重读        
>strong 强调        
>dl>dt+dd 自定义列表        
>a 超链接       
>img 图片       
>video 视频     
>audio 音频     

## 6.html 的注释怎样写？

>     <!--注释-->
>
>

## 7.如何在html 页面上展示 &lt;div&gt;&lt;/div&gt; 这几个字符？

>     &lt;div&gt;&lt;/div&gt;
>

## 8.title 属性和 alt属性分别有什么作用？

>title:     
>为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。这样就使得访问者知道那些链接将会带他们到什么地方，他们就不会加载一个可能完全不感兴趣的页面。另外一个潜在的应用就是为图像提供额外的说明信息，比如日期或者其他非本质的信息。
>
>简单理解：给链接添加注释,当光标移到链接上时，就会显示出title里面的文字。

>alt:   
>使用alt属性是为了给那些不能看到你文档中图像的浏览者提供文字说明。这包括那些使用本来就不支持图像显示或者图像显示被关闭的浏览器的用户，视觉障碍的用户和使用屏幕阅读器的用户。替换文字是用来替代图像而不是提供额外说明文字的。alt属性包括替换说明，对于图像和图像热点是必须的。它只能用在img、area和input元素中（包括applet元素）。
>
>简单理解：给图片添加注释，当图片不能显示的时候，就会把alt里面的文字显示出来。

