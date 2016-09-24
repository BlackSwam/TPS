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
	$('#menu').on('mouseover',function(){
			$('#menu').show();
			
			$('#menu').on('mouseover','li',function(){
					$(this).find('p').stop().animate({"padding-left":"20px"})
					var idx=$(this).index();
					$('.second').eq(idx).show().siblings().hide();
		
	}).on('mouseout','li',function(){
		$(this).siblings().find('p').stop().animate({"padding-left":"0px"})
	})	
	$('.second').on('mouseout',function(){
			$('#menu,.second').hide();
	}).on('mouseover',function(){
			$('#menu,.second').show();
			})
		})
	
	.on('mouseout',function(){
			$('#menu,.second').hide();
		})
	})
	
	.on('mouseout',function(){

				$('#menu').hide()
		
		})
		

	

	
	//购物车数量

	if(getCookie("arr")){
		var str = getCookie("arr");
	
		var arr =JSON.parse(str);
		
		$('.num').text(arr.length);
	}
	

	
	//跳转到购物车
		$('#cart').on('click',function(){
		location.href='http://10.3.131.38:8000/html/shoppingcar.html'
	})
		
//	$('.listgoods').on('mouseover','li',function(){
//		$('<i/>').appendTo($(this)).addClass('.top-border');
//		$('<i/>').appendTo($(this)).addClass('.bottom-border');
//		$('<i/>').appendTo($(this)).addClass('.right-border');
//		$('<i/>').appendTo($(this)).addClass('.left-border');
//	})
//	.on('mouseout','li',function(){
//		$('.top-border,.bottom-border,.right-border,.left-border').remove()
//	})
		
})
