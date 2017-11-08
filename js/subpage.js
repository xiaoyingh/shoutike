//筛选条件
screenSX($("[name='mode']"));
screenSX($("[name='stage']"));
screenSX($("[name='board']"));
function screenSX(obj){
	obj.each(function(){
		$(this).on('click',function(){
			obj.removeClass('on');
			$(this).addClass('on');
		});
	});
}

//左侧边栏 热门精品微课
$('.sidebar li').hover(function(){
	$('.sidebar li').removeClass('side-active');
	$(this).addClass('side-active');
},function(){
	$(this).addClass('side-active');
});

//右边内容tabs切换效果
$(".tabs").on('click',function(){
	$(".tabs").removeClass('tabs-active');
	$(this).addClass('tabs-active');
	$('.tabs-con').css('display','none');
	$('.tabs-con').eq($(this).index()).css('display','block');
});
