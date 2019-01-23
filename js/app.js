$(function(){
	$('.app_btn_HR').on('click',function(){
		$(".app_btn_left p").removeClass("app_btn_fff");
        $(this).addClass("app_btn_fff");
		$('.zhengxin').css('display','none')
		$('.beidiao').css('display','block')
	})
	$('.app_btn_car').on('click',function(){
		$(".app_btn_left p").removeClass("app_btn_fff");
        $(this).addClass("app_btn_fff");
		$('.zhengxin').css('display','none')
		$('.beidiao').css('display','block')
	})
	$('.app_btn_zheng').on('click',function(){
		$(".app_btn_left p").removeClass("app_btn_fff");
        $(this).addClass("app_btn_fff");
		$('.zhengxin').css('display','block')
		$('.beidiao').css('display','none')
	})
})
