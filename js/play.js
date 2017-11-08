//章节笔记
$('.list-tabs ul li:first-child').addClass('play-active');
$('.kc-zj').on('click',function(){
	$('.kc-zj').removeClass('play-active');
	$(this).addClass('play-active');
	$('.play-con').css('display','none');
	$('.play-con').eq($(this).index()).css('display','block');
});
//我的笔记和同学笔记
$('.note ul li:first-child').addClass('note-active');
$('.kc-bj').on('click',function(){
	$('.kc-bj').removeClass('note-active');
	$(this).addClass('note-active');
	$('.note-con').css('display','none');
	$('.note-con').eq($(this).index()).css('display','block');
});
//课程详情切换
$('.left-tabs ul li:first-child').addClass('left-active');
$('.left-tabs .kcsm').on('click',function(){
	$('.left-tabs .kcsm').removeClass('left-active');
	$(this).addClass('left-active');
	$('.left-con').css('display','none');
	$('.left-con').eq($(this).index()).css('display','block');
});

//评论点赞
$('.pldz').attr('data-btn','false');
$('.pldz').on('click',function(){
	if($(this).attr('data-btn') == 'false'){
		var num = parseInt($(this).next().html());
		$(this).attr('data-btn','true');
		$(this).css('background-position-x','-152px');
		$(this).next().html(num+1);
	}else{
		var num = parseInt($(this).next().html());
		$(this).attr('data-btn','false');
		$(this).css('background-position-x','-130px');
		$(this).next().html(num-1);
	}
});
