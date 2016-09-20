$(function(){
	$('<div/>').load("header.html",function(){
		$(this).insertBefore('.out-content')
	})
	$('<div/>').load("foot.html",function(){
		$(this).insertAfter('.out-content')
	})
})
