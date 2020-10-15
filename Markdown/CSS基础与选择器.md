# CSS基础与选择器

## CSS 加载方式有几种？

>四种。     

>1.通过<link>引入CSS   
```
<link rel="stylesheet" href="css/style.css">
```
>2.通过@import引入样式，放入css中    
```
<link rel="stylesheet" href="css/style.css">
```
>3.将 CSS 放在页面的 &lt;style&gt;元素中。     

```
<head>
  <meta charset="UTF-8" />
  <title>CSS</title>
  <style>
    h1 { background: orange; }
  </style>
</head>
``` 

>4.内联样式，在标签中直接写样式表

```
<p style="background: orange; font-size: 24px;">CSS<p>
```
## 2.@charset有什么作用？

>声明css文件使用的编码格式，必须写在第一行代码。


## 3.@import有什么作用？如何使用？  

>在css文件中引入其他样式表.在css文件里面写@import url("css文件相对路径").
```
<style>
@import url("index.css");
@import url('index.css');
@import url(index.css);
@import 'custom.css';
@import "common.css";
@import url('landscape.css') screen and (orientation:landscape);

</style>
```


## 4.id 选择器和 class 选择器的使用场景分别是什么？
   
>id选择器匹配特定的id元素，class包含（不是等于）特定类的元素，描述一组元素的样式，你可以多次使用class赋值，来命名元素名。
>在CSS文件里书写时，ID加前缀"#"；CLASS用"."


## 5.CSS选择器常见的有几种？

>1.元素选择器   
>2.ID选择器     
>3.类选择器     
>4.通用选择器   
>5.属性选择器   
>6.伪类选择器   
>7.伪元素选择器     
>8.组合选择器       
>9.多个选择器       

## 6.伪类选择器有哪些？伪元素有哪些？

> 伪类   

```
a:link { ... }       链接
a:visited { ... }    访问后的链接
a:hover { ... }      光标移动到链接上的时候
a:active { ... }     点击链接之后
.child:first-child { ... }   选中父类型下的第一个值为child
.child:last-child { ... }    选中父类型下的最后一个值为child
.child:nth-of-type(p) { ... }  选中父类型下同种类型的第p个值为child
p:not(.warning) { ... }
```
>伪元素

```
::after
::before
::selection   //应用于文档中被用户高亮的部分（比如鼠标选中的部分）。
::backdrop
::first-letter  //选中一整块文字第一行的第一个字母，当文字所处的行之前没有其他内容（如图片和内联的表格）。
::first-line    //将样式只应用于一个块状元素的首行。
::-webkit-input-placeholder  //设置 input 元素 placeholder 的字体颜色
```

## 7.以下选择器分别是什么意思?

```
#header{       //id属性值为header
}
.header{       //class属性值为header
}
.header .logo{  //class属性值为header的所有后代为logo
}
.header.mobile{  //class属性值同时含有header和mobile
}
.header p, .header h3{  //class属性值为header的所有后代p或者h3标签
}

#header a:hover{   //id为header后代的a链接，当鼠标移动到链接上时显示
}
#header .logo~p{    //id为header后代的class属性值为logo之后的所有同级元素p标签
}
#header .logo+p{    //id为header后代的class属性值为logo之后的相邻的同级元素p标签
}
#header .logo p{    //id为header后代的class属性值为logo的后代元素p标签
}
#header .logo>p{    //id为header后代的class属性值为logo的所有直接子元素p标签
}
#header p.logo{     //id为header后代的含有class为logo的p标签
}
#header .logo.p{    //id为header后代的同时含有class为logo和p的标签
}

#header input[checked]{   //id为header后代中含有checked的input标签
}
```

## 8.选择器的优先级是如何计算的？

>选择器的优先级：
>1. `!important`标记
>2. 内联style样式
>3. ID选择器
>4. Class选择器
>5. 伪类选择器
>6. 属性选择器
>7. 标签选择器
>8. 通配符
>9. 浏览器自定义   

>按权重由高到低作如下归类：

>行内样式 <div style="xxx"></div> ==> a     
>ID 选择器 ==> b        
>类，属性选择器和伪类选择器 ==> c       
>标签选择器、伪元素 ==> d       
>当a权重相同的时候，比较b，以此类推，谁的权重大就显示谁的样式       
```
<style>
    #a .a.b.c p{      //test1
        color: red;
    }
    #a .a.b p{        //test2
        color: blue; 
    }

</style>

//test1优先级比test2的高，test1权重是a=1,b=1,c=3,d=1. test2的权重是a=1,b=1,c=2,d=1
//因为test1的c比test2的c大，所以test1的优先级高。
```


## 9.运行如下代码，并对结果做出解释

```
 <style>
 .box:first-child {
  color: red;
}
.box:first-of-type {
  background: blue;
}
.box :first-child {
  font-size: 30px;
}
.box :first-of-type {
  font-weight: bold;
}
 </style>
  <div class="container">
    <div class="box">div.box</div>
    <p class="box">p.box</p>
    <div class="box">div.box</div>
    <div class="box">
      <div class="item">div.item</div>
      <p class="item">p.item</p>
    </div>
    <p class="box"></p>
  </div>
```

>运行地址和代码解释     
>[http://js.jirengu.com/jidunuhomo/6/edit](http://js.jirengu.com/jidunuhomo/6/edit)
