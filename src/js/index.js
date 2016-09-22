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
	var index=0;
	
	var timer;

	$('.banner').on('mouseenter',function(){
		clearInterval(timer);
		$('.banner .list-dota,.banner .right-btn,.banner .left-btn').show();

	
	}).on('mouseleave',function(){
		$('.banner .list-dota,.banner .right-btn,.banner .left-btn').hide();
		timer = setInterval(function(){
		
			index++;
			showPic();
		},3000);
	}).trigger('mouseleave')
	
			//上一张
	$('.banner .right-btn').on('click',function(){
					index--;
					showPic();
					console.log(1)
	})
	
		// 下一张
	$('.banner .left-btn').on('click',function(){
		index++;
		showPic();
	})

			//ul切换
		$('.banner .list-dota').on('click','li',function(){
			index = $(this).index();
			showPic();
		});
	function showPic(){
		if(index>=10){
			index = 0;
		}else if(index<0){
			index = 9;
		}
		$('#scroll').find('li').eq(index).animate({opacity:1}).siblings('li').animate({opacity:0});
		$('.banner .list-dota li').eq(index).addClass('hh').siblings().removeClass('hh')
	}
	
	//跳转到购物车

})
