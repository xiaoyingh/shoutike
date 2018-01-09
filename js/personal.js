
//点击切换左边菜单栏
$('.my-list .lists').first().children(0).css('background-position-x','-22px');
$('.my-list .lists').first().children().css('color','#d21313');
$('.my-list .lists').each(function(index){
	$(this).on('click',function(){
		$('.my-list .lists').children().css('color','#666');
		$('.my-list .lists').children().css('background-position-x','0px');
		$(this).children().css('color','#d21313');
		$(this).children(0).css('background-position-x','-22px');
		$('.my-list .list-icon').removeClass('glyphicon glyphicon-menu-right');
		$(this).find('span').eq(2).addClass('glyphicon glyphicon-menu-right');
		$('.person-item').removeClass('item-active');
		$('.person-item').eq($(this).index()).addClass('item-active');
	});
});

//右边内容
//我的笔记
$('.note-nav li:first-child').addClass('my-note-active');
//查看全部
$('.note-list').attr('data-onoff','false');
$('.qb-btn').each(function(){
	$(this).on('click',function(){
		if($(this).parent().prev().attr('data-onoff') == 'false'){
			$(this).parent().prev().css('height','auto');
			$(this).parent().prev().attr('min-height','90px');
			$(this).parent().prev().attr('data-onoff','true');
		}else{
			$(this).parent().prev().css('height','90px');
			$(this).parent().prev().attr('min-height','');
			$(this).parent().prev().attr('data-onoff','false');
		}
				
	});
});

//删除收藏记录时弹出弹窗确认是否删除
$('.remo').each(function(){
	$(this).on('click',function(){
		$('.person-mask').css('display','block');
		$('.my_model').css('display','block');
		//声明变量储存要删除的当前笔记
		var $note = $(this).parents('.myrecords');
		$('.dialog-sure').on('click',function(){
		    $('.my_model').css('display','none');
		    $('.person-mask').css('display','none');
			$note.remove();
		});
		
		$('.dialog-close').on('click',function(){
			$('.my_model').css('display','none');
		    $('.person-mask').css('display','none');
		});
		
		$('.my_model .closeModel').on('click',function(){
			$('.my_model').css('display','none');
		    $('.person-mask').css('display','none');
		});
	});
});
//我的提问和回答
$('.my-answers-nav a').on('click',function(){
	$('.my-answers-nav a').removeClass('my-ans-active');
	$(this).addClass('my-ans-active');
	$('.my-ques-ans').css('display','none');
	$('.my-ques-ans').eq($(this).index()).css('display','block');
});

//基础资料
//上传头像
$(".file").on("change", function() {
	var objUrl = getObjectURL(this.files[0]); //获取图片的路径，该路径不是图片在本地的路径
//	alert(objUrl);
	if(objUrl) {
		$("#pic").attr("src", objUrl); //将图片路径存入src中，显示出图片
	}
});

//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}


//奖学金弹窗
$('.whatjxj').on('click',function(){
	$('.person-mask').css('display','block');
	$('.jxjxq').css('display','block');
});
$('.jxjgz').on('click',function(){
	$('.person-mask').css('display','block');
	$('.jxj-gz').css('display','block');
});


//代言人
$('.know-poster').on('click',function(){
	$('.person-mask').css('display','block');
	$('.poster').css('display','block');
});
$('.poster-btn').on('click',function(){
	$(this).parent().parent().css('display','none');
	$('.person-mask').css('display','none');
});
$('.ench-btn').on('click',function(){
	$('.person-mask').css('display','block');
	$('.know-enchashment').css('display','block');
});

//设置资料 绑定优惠码和修改密码
$('.set-yhm').on('click',function(){
	$('.person-mask').css('display','block');
	$('.fpzc').css('display','block');
});
$('.set-pass').on('click',function(){
	$('.person-mask').css('display','block');
	$('.xgpass').css('display','block');
});


