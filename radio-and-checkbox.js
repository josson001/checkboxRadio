/*
* @Author: ww
* @Date:   2018-04-25 14:03:14
* @Last Modified by:   ww
* @Last Modified time: 2018-04-25 14:17:26
*/
function allRadio(obj){
	this.el=obj.allRadios;
	this.type=obj.type,
	this.wrongMarkUrl = obj.wrongMarkUrl;
	this.rightMarkUrl = obj.rightMarkUrl;
	this.callback = obj.callback;
	this.labelImg = this.el.getElementsByClassName("label-img");
	this.input1=this.el.getElementsByTagName("input")[0];
	this.init();
}
allRadio.prototype={
	constructor:allRadio,
	init:function(){
		if(this.type=="radio"){
			this.labelImgClick();
		}else{
			this.checkClick()
		}
	},
	//这是checkbox
	checkClick:function(){
		 var that=this;
		this.labelImg[0].onclick=function(){
			if(that.input1.checked){
				this.firstElementChild.src=that.wrongMarkUrl;
			}else{
				this.firstElementChild.src=that.rightMarkUrl;
				that.callback();
			}
		}
	},
	//这是radio
	labelImgClick:function(){
		var that = this;
		for(var i = 0 ;i<this.labelImg.length; i++){
			(function(){
				that.labelImg[i].addEventListener("click",function(){
					for(var j=0;j<that.labelImg.length;j++){
							that.labelImg[j].firstElementChild.src=that.wrongMarkUrl;
					}
				this.firstElementChild.src=that.rightMarkUrl;
				that.callback();
				})
			})()
		}
	}
}