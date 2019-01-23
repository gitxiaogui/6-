$(function() {
	
	//TODO 页面初始化时执行
    window.onload=function(){
        $("html,body").animate({scrollTop:0},"slow");
    }
    window.onscroll = function(){
    	var scrollTop = $(window).scrollTop();
    	//TODO 头部定位
        if(scrollTop>200){
            $("#header").addClass('header_position')
        }else{
            $("#header").removeClass('header_position')
        }
    }
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination', // banner图片切换圆点(分页器)
        paginationClickable: true,
        // 前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000, // 速度
        autoplay: 3000, //可选选项，自动滑动
        autoplayDisableOnInteraction : false,
		freeMode: true
    });
})


    