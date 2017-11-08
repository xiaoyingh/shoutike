
//未注册优惠码 点击课程的弹窗效果
$('#fpzc-yhm').blur(function(){
//	alert($(this));
	yhm($(this));
});
$('#fpzc-yhm').focus(function(){
//	alert($(this));
	$(".error2").hide();
	$(".error2").removeClass('error2');
});

//点击提交扶贫优惠码
$('#fpzc-btn').click(function(){
	$('#fpzc-form').submit(function(e){
		if(!yhm($('#fpzc-yhm'))){
				e.preventDefault();
				alert('登录失败');
			}else{
				//注册成功
				//$('#reg-form').submit();
				console.log('注册成功');
				$('.fpzc').css('display','none');
                $('.login-mask').css('display','block');
                e.preventDefault();
			}
	});
});

//优惠码验证
function yhm(obj){
	var Pval = obj.val();
	
	reg1 = /^STK\d{15}$/;
    
    if (Pval == '') {
        obj.next().addClass("error2");
        $(".error2").html("*请填写优惠码");
        $(".error2").show();
    }
    else if (Pval.length != 18||!(reg1.test(Pval))) {
        obj.next().addClass("error2");
        $(".error2").html("*优惠码为以STK开头后面是数字的18个字符");
        $(".error2").show();
    }
    else {
        $(".error2").hide();
        return true;
    }
    return false;
}

