//使用奖学金状态
$('.choice-left p:first-child').children('span').on('click',function(){
	if($(this).hasClass('glyphicon-menu-up')){
		$(this).removeClass('glyphicon-menu-up');
	    $(this).addClass('glyphicon-menu-down');
	    $(this).parent().parent().next().show();
	}else{
		$(this).removeClass('glyphicon-menu-down');
	    $(this).addClass('glyphicon-menu-up');
	    $(this).parent().parent().next().hide();
	}
	
});


//监控奖学金是否选中使用
$('#checks').change(function(){
	if($(this).is(':checked')){
		var jxj = $(this).next('span').html().replace(/\D|^0/g,'')/100;
		$('#jxjMoney').html('-￥'+jxj);
		lastmoney();
	}else{
		$('#jxjMoney').html('-￥00.00');
		lastmoney();
	}

});

//最后的总计金额
lastmoney();
function lastmoney(){
	var oldmoney = $('#oldMoney').html().replace(/\D|^0/g,'');
//	var zhmoney = $('#zhMoney').html().replace(/\D|^0/g,'');
	var jxjmoney = $('#jxjMoney').html().replace(/\D|^0/g,'');
	var lastmoney = (oldmoney -jxjmoney)/100;
	$('#lastMoney').html('￥'+lastmoney);
}
