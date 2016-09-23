$(function(){
	var $Ul=$('#addgoods');

	var str = getCookie("arr");
	
	var arr =JSON.parse(str);
	

//[{"product":"费雪Fisher-Price猴公仔 毛绒玩具布娃娃玩偶FPL004 全国包邮","price":"￥88.92","img":"../image/detail-goods/57d906cae4636_thumb.jpg","goodsNum":"2","allPrice":null}]
	for (var i = 0; i < arr.length; i++)
	{
		// 创建一个商品
		var $li=$('<li/>');
		var $oDiv=$('<div/>');
		$oDiv.appendTo($li);
		$('<img/>').attr("src",arr[i].img).appendTo($oDiv);
		$('<a/>').html(arr[i].product).appendTo($li);
		
		$('<i/>').addClass('delect').appendTo($li);
		$('<b/>').addClass('allprice').appendTo($li);
		
		$('<span/>').html("-").addClass('left-b').appendTo($li);
		$('<span/>').html(arr[i].goodsNum).addClass('middle-xx').appendTo($li);
		$('<span/>').html("+").addClass('right-b').appendTo($li);
		$('<span>').html(arr[i].price).addClass('singleprice').appendTo($li);
		
		$Ul.append($li);
		
		
//		$('.right-b').on('click',function(){
//			var idx=$(this).index();
//			$('.middle-xx').eq(idx).text('0')
//		})

		
		var all=$('.middle-xx').eq(i).text()*$('.singleprice').eq(i).text().slice(1);
		$('.allprice').eq(i).text("￥"+all);
		
			
		//删除商品
	      $('.delect').on('click',function(){
			$(this).parent().remove();
	  	  })
	}

		//总共的商品数量
	var str = getCookie("arr");
	
	var arr =JSON.parse(str);
	$('#d-num').text(arr.length)
})
