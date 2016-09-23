jQuery(function($){
  //滚动到顶部 
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=900)
		{
			$('.scroll-top').show();
		}else{
			$('.scroll-top').hide();
		}
	})
	$('.scroll-top').on('mouseover',function(){
		$(this).addClass('hrr')
	}).on('mouseout',function(){
		$(this).removeClass('hrr')
	}).on('click',function(){
		$('html body').animate({scrollTop: 0})
	})
	
	//轮播图

	scroll('.banner','#scroll');
	scroll('.goods-scroll','#baby');
	scroll('.g-scroll','#beautiful');
	scroll('.g1-scroll','#food');
	scroll('.g2-scroll','#clock');
	scroll('.g3-scroll','#health');
	
	
	
	//下拉菜单
	$('.allgoods').on('mouseover',function(){
		$('#menu').show();
		
	$('#menu').on('mouseover','li',function(){
		$(this).find('p').stop().animate({"padding-left":"20px"})
		
		var idx=$(this).index();
		$('.second').eq(idx).show().siblings().hide();
		
	}).on('mouseout','li',function(){
		$(this).siblings().find('p').stop().animate({"padding-left":"0px"})
	})
	
//	$('.second').on('mouseover',function(){
//		var idx=$(this).index();
//		$('#menu li p').eq(idx).siblings().stop().animate({"padding-left":"20px"})
//	})
	
	
	//购物车数量
	var str = getCookie("arr");
	
	var arr =JSON.parse(str);
	
	$('.num').text(arr.length);
	}).on('mouseout',function(){
		
	})
	

	
	//跳转到购物车
		$('#cart').on('click',function(){
		location.href='http://10.3.131.38:3000/html/shoppingcar.html'
	})
})
