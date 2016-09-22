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
		test:{number:true,rangelength:[0,11]}
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
		
		$div.html(num).insertAfter($('.getnum'));
		
	})
})
