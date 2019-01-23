$(function(){
	//服务对象点击
	$('.serve').on("click",function(){
		var scroll_top = document.getElementById('serve').offsetTop
		$("html,body").animate({scrollTop:scroll_top-80},"slow");
	})
	$('.API').on("click",function(){
		var scroll_top = document.getElementById('quick').offsetTop
		
		$("html,body").animate({scrollTop:scroll_top-80},"slow");
	})
})