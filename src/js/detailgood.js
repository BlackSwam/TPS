$(function(){
	$('.s-img').on('mouseover','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var idx=$(this).index();
		$('.d-img span').eq(idx).show().siblings(".d-img span").hide()
	})
	
	$('.d-img span').each(function(idx,item){
		$(this).lxzoom({width:460,height:460})
	})
	
})
