$(function(){
	//小图切换大图
	$('.s-img').on('mouseover','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var idx=$(this).index();
		$('.d-img span').eq(idx).show().siblings(".d-img span").hide()
	})
	
	$('.d-img span').each(function(idx,item){
		$(this).lxzoom({width:460,height:460})
	})
	
//	商品评价bug!!!!
	$('.w1200').on('click','li',function(){
		$(this).addClass('on').siblings().removeClass('on');
        $(this).find('i').show(). parent().siblings().find('i').hide();
        var i=$(this).index();
        $('.list-img ').children('div').eq(i).show().siblings().hide();
	})
	
	
	//滚动到顶部
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=900)
		{
			$('.scroll-top').show();
			$('.s-h').show();
		}else{
			$('.scroll-top').hide();
			$('.s-h').hide();
		}
	})
	$('.scroll-top').on('mouseover',function(){
		$(this).addClass('hrr')
	}).on('mouseout',function(){
		$(this).removeClass('hrr')
	}).on('click',function(){
		$('html body').animate({scrollTop: 0})
	})
})
