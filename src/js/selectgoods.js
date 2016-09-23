$(function(){
	var $listgoods = $('.listgoods');
		function ajax(){
			$.ajax({
				url:'../json/list.json',
				dataType:'json',
				success:function(res){
					console.log(res);
					$.each(res,function(idx,item){
						var $li=$('<li/>');
						$('<img/>').attr('src',item.src).appendTo($li);
						$('<i/>').addClass('gift').css('background','url'+item.gift+' no-repeat 0 0').appendTo($li);
						$('<i/>').addClass('car').css('background','url'+item.car+' no-repeat -124px 0').appendTo($li);
						var $p=$('<p/>');
						$p.addClass('country').html(item.country).appendTo($li);
						$('<span/>').addClass('CN').css('background','url'+item.CN+' no-repeat 0 -11px').appendTo($p);
						$('<a/>').html(item.title).appendTo($li);
						$('<span/>').addClass('price').html(item.price).appendTo($li);
						$li.appendTo($listgoods);
					});
					
				}
			});
		}

	 	ajax();
			

			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载
				if(scrollTop >= $(document).height() - $(window).height() - 100){
					
					ajax();

				}
          });
          $(window).trigger('scroll');
          
          
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