$(function(){
	$(".dl form").validate({

	// 设置验证规则
	rules:{
		tel:{required:true,number:true,rangelength:[0,11]},
		password:{required:true,rangelength:[3,16]},
	},

	// 设置提示信息
	messages:{
		tel:{required:'请填写正确的手机号'},
		password:{required:"请输入一个长度介于 3-16 之间的字符"},
		
		}
	});
	$(".zc form").validate({
		rules:{
		tel1:{required:true,number:true,rangelength:[0,11]},
		password1:{required:true,rangelength:[3,16]},
		email:{email:true,required:true},
		test:{number:true,rangelength:[1,4]}
		},
		messages:{
		tel1:{required:'请填写正确的手机号'},
		password1:{required:"请输入一个长度介于 3-16 之间的字符"},
		test:{required:"请输入正确的验证码"}
		}
	})
	
	
	var $div=$('<div/>');
	$div.html('');
	$('.getnum').on('click',function(){
		
		var num=parseInt(Math.random()*10000);
		
		$div.html(num).addClass('box').insertAfter($('.getnum'));
		
	})
	
	
	$('.for-in').on('click',function(){
//		console.log($(".dl form").serializeArray())
		var arr=$(".dl form").serializeArray();
		$.ajax({
			url:'../json/passin.json',
			dataType:'json',
			success:function(res){
//				console.log(res)
				$.each(res,function(idx,item){
//					console.log(item)
					if(arr[0].value==item.tel&&arr[1].value==item.password)
					{
						location.href='http://10.3.131.38:8000/index.html'
						return false;
					}
					else{
						alert('用户名和密码错误！！！')
					}
				})
			}
			
		})
	})
	
	
	$('.now').on('click',function(){
//		console.log($(".zc form").serializeArray())
//		var arrt=$(".zc form").serializeArray();
//		$.ajax({
//			url:'../json/passin.json',
//			data:{tel:arrt[0].value,password:arrt[1].value},
//			type:send,
//			success:function(){alert("注册成功！")},
//		$.post('../json/passin.json',$('.zc form').serialize())
			if($('.test').val()==$('.box').html())
			{
				alert('注册成功！')
			}
			else{
				alert('注册信息填写错误！请重新注册！')
			}
		})

})
	


