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
	
	//点击按钮添加商品数量
	var j=$('.g-num').text();
	$('.td').on('click',function(){
		j++;
		$('.g-num').text(j);
	})
	$('.dx').on('click',function(){
		
		if(j==1)
		{
			$('.g-num').text(1);
			return;
		};
		j--;
		$('.g-num').text(j);
	})
	
	//加入购物车
	var str = getCookie("arr");

	// 用于存储所有的商品
	var arr = [];
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = JSON.parse(str);
	}

	// 商品由 名称 、单价、图片、总价、数量 组成
	// 例如：
	// {product: XXX, price: 180}
    $(".in-car").on('click',function(){
    		// 这个是价格
			var oPrice =$('.goods-price span').text();

			// 名称
			var oProduct =$('.g-n').text();
			
			// 图片
			var goodsImg=$('.cookie-img').attr('src');
			
			//数量
			var goodsNum=$('.g-num').text();
			
			var a=oPrice*goodsNum;
			
		
			// 转换成一个
			// var str = encodeURI(oSpan.innerHTML);

			var obj = {};

			obj.product = oProduct;
			obj.price = oPrice;
			obj.img=goodsImg;
			obj.goodsNum=goodsNum;
	
			// 将创建好的商品添加到数组中
			arr.push(obj);

			// 将数组的内容设置到 cookie 中呢？
			// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
			addCookie("arr", JSON.stringify(arr), 7);
			
			alert("添加成功");

    })
	

	
		
		

})
