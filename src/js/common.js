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
	
	$('#cart').on('click',function(){
		location.href='http://10.3.131.38:8000/html/shoppingcar.html'
	})
	
	

	if(getCookie("arr")){
		var str = getCookie("arr");
	
		var arr =JSON.parse(str);
		
		$('.num').text(arr.length);
	}

	


})



