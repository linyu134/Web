## 1.什么是 CSS 继承?哪些属性能继承，哪些不能？
被包在内部的标签将拥有外部标签的样式性，即子元素可以继承父元素的属性。     

>能继承的属性：     
1.字体系列属性,例如font、font-family、font-weight等     
2.文本系列属性，例如text-align、color等     
3、元素可见性：visibility       
4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout   
5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style  
6、生成内容属性：quotes     
7、光标属性：cursor     
8、页面样式属性：page、page-break-inside、windows、orphans      
9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、   volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation        

>无继承：   
1、display：规定元素应该生成的框的类型      
2、文本属性：vertical-align、text-shadow。white-space等     
3、盒子模型的属性：width、height、margin、border、padding等     
4、背景属性：background、background-color等     
5、定位属性：float、clear、position等       
6、生成内容属性：content、counter-reset、counter-increment      
7、轮廓样式属性：outline-style、outline-width、outline-color、outline   
8、页面样式属性：size、page-break-before、page-break-after      
9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、     play-during         

## 2.块级元素和行内元素分别有哪些？

行内元素指的是书写完成后不会自动换行，并且元素没有宽和高。  
块级元素写完后会自动换行，有宽高可以修改。

>行内元素有：heda   meat   title  lable  span  br  a   style  em  b  i   strong

>块级元素有：body  from  select  textarea  h1-h6 html table  button  hr  p  ol  ul  dl  cnter  div


## 3.如何让块级元素水平居中？如何让行内元素水平居中?如何让 inline-block 元素水平居中？

行内元素用text-align:center;    
块级元素用margin:0 auto;    

inline-block 元素水平居中:  
display：inline-block;（或display:inline）和text-align:center;实现水平居中  
inline-block，就对其父级元素添加text-align:center

```
.content-wrapper{
            text-align: center;
        }
 
.content-wrapper ul li{
             display: inline-block;
       }
```

## 4.单行文本溢出加 ...如何实现?

在样式里面添加这三行属性值
```
 h3{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

## 5.px, em, rem,vw 有什么区别

px代表物理屏幕上能显示出的最小的一个点,     
em 是相对于父级的字体大小,      
rem是相对于HTML根元素的字体大小,        
vh 和vw相对于视口的高度和宽度,1vh 等于1%的视口高度，1vw 等于1%的视口宽度

## 6.解释下面代码的作用? 字体里\5b8b\4f53代表什么?
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```

body里面的字体是12像素的，行高是12*1.5的，字体类型是tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',ans-serif中的第一个，如果tahoma字体系统里面没有，就会选择第二个：arial。如果第二个也没有，就会选择第三个，以此类推。       

字体里\5b8b\4f53代表宋体

## 7.实现如下效果

题目地址：[http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/container.html](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/container.html)

 代码作业地址：
 [http://js.jirengu.com/jusinitabi/1/edit?html,output](http://js.jirengu.com/jusinitabi/1/edit?html,output)
    


## 8.实现如下效果

题目地址：[http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/button.html](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/button.html)

 代码作业地址：
 [http://js.jirengu.com/cafukunuse/1/edit?html,output](http://js.jirengu.com/cafukunuse/1/edit?html,output)

## 9.实现如下两个表格效果

题目地址：[http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/table.html](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/table.html)

代码作业地址：
 [http://js.jirengu.com/detupejaqa/1/edit?html,output](http://js.jirengu.com/detupejaqa/1/edit?html,output)

## 10.实现如下三角形

题目效果图和代码都在这个地址里面：
 [http://js.jirengu.com/yojokoqaji/1/edit](http://js.jirengu.com/yojokoqaji/1/edit)

>
>
>
>
>
>
>
>
>
