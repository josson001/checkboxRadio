# checkboxRadio
checbox  radio   面向对象  图片
# 调用方法如下：
###             1.引入js文件radio-and-checkbox.js。
###             2.按照html文件中的dom结构写html标签。
            
```
<div class="checkbox">   <!--顶层元素-->
<!--顶层元素的类名可以自定义 ，别的类名不要变，可以用这个类名，添加样式，也可以添加类名-->
	<input type="checkbox"  id="checkbox3">	
		<label for="checkbox3" class="label-img">
		<img src="img/wrong.jpg"  alt="">
		<!-- label的第一个标签必须是img，别的地方随便。input 的id 自定义  -->
		<span>第一题</span>
	</label>	
</div>
这是checkbox的html代码结构
```

```
<div class="all-radios">  <!--顶层元素-->
    <div>
            <input type="radio" class="radios" name="y" id="input12">
	     <label for="input12" class="label-img">
	        <img src="img/wrong.jpg" alt="">
		 <span>答案 1</span>
	     </label>
    </div>
    <div>
	    <input type="radio" class="radios" name="y" id="input22">
	    <label for="input22"  class="label-img">
	   	<img src="img/wrong.jpg"  alt="">
		<span>答案 2</span>
	   </label>
    </div>
    <div>
	    <input type="radio" class="radios" name="y" id="input32">
		<label for="input32" class="label-img">
			<img src="img/wrong.jpg"  alt="">
			<span>答案3</span>
	    </label>
    </div>
</div>
<!-- 这个是radio的html结构和checkbox的要求一样，但要主义name的命名规则-->
```
### 3.css样式
```
    .radios{
		position: absolute;
		left: -999px;
		top: 0;
	}
	<!--这是用来隐藏input框的，别的样式根据自己的需求写-->
```
### 4. new下，生成实例，即刻完成。
### js样式

```
    <script src="radio-and-checkbox.js"></script>
   // 引入js文件，根据自己的相对路径
    var allRadios=document.getElementsByClassName("all-radios");
    //面向对象的唯一顶层元素
	new allRadio({
			allRadios:allRadios[0],//顶层元素
			wrongMarkUrl:"img/wrong.jpg",//非选中状态的图片
			rightMarkUrl:"img/right.jpg",//选中状态的图片
			type:"radio",//类型两个值radio或者是checkbox
			callback:function(){
				console.log("向后台发数据");
				//回调函数，可以用来发送ajax请求。
			}
		    });
```
