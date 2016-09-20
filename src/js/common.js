$(function(){
	//top
	$('.select').each(function(idx,item){
		$(this).on('mousemove',function(){
			$(this).addClass('active')
		}).on('mouseout',function(){
			$(this).removeClass('active')
		})
	})
	$('.middle').on('mousemove',function(){
		$('.middle').css('color','#ed4242')
	}).on('mouseout',function(){
		$('.middle').css('color','#333')
	})
	
	//导航栏
	$('.leader-ul li').each(function(idx,item){
		
		$(this).on('mousemove',function(){
			$(this).addClass('hover')
		}).on('mouseout',function(){
			$(this).removeClass('hover')
		})
	})
})



