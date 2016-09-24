function scroll(oClass,oId){
		var index=0;

		var timer;

	$(oClass).on('mouseenter',function(){
		clearInterval(timer);
		$(''+oClass+' .list-dota,'+oClass+' .right-btn,'+oClass+' .left-btn').show();

	
	}).on('mouseleave',function(){
		$(''+oClass+' .list-dota,'+oClass+' .right-btn,'+oClass+' .left-btn').hide();
		timer = setInterval(function(){
		
			index++;
			showPic();
		},3000);
	}).trigger('mouseleave');
	
			//上一张
	$(''+oClass+' .right-btn').on('click',function(){
			index--;
			showPic();
			console.log(1)
	});
	
		// 下一张
	$(''+oClass+' .left-btn').on('click',function(){
		index++;
		showPic();
	})

			//ul切换
	$(''+oClass+' .list-dota').on('click','li',function(){
		index = $(this).index();
		showPic();
	});
	
	function showPic(){
		if(index>=$(oId).find('li').length){
			index = 0;
		}else if(index<0){
			index = $(oId).find('li').length-1;
		}
		$(oId).find('li').eq(index).stop().animate({opacity:1}).siblings('li').stop().animate({opacity:0});
		$(''+oClass+' .list-dota li').eq(index).addClass('hh').siblings().removeClass('hh')
	}
}
	

