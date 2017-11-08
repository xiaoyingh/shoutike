//登录注册
$('.login-tab span').on('click',function(){
	$('.login-tab span').removeClass('active-title');
	$(this).addClass('active-title');
	$('.login-con').removeClass('logreg-active');
	$('.login-con').eq($(this).index()).addClass('logreg-active');
});
//点击顶部导航的登录 注册效果
$('.nav-login .nav-dlzc').on('click',function(){
//	console.log($('.nav-login .nav-dlzc'));
//	console.log($('.nav-login .nav-dlzc').length);
//	console.log($(this).html());
//	console.log($(this).index()-1);
	$('.login-mask').css('display','block');
	$('.login').css('display','block');
	$('.login-tab span').removeClass('active-title');
	$('.login-tab span').eq($(this).index()-1).addClass('active-title');
	$('.login .login-con').removeClass('logreg-active');
	$('.login .login-con').eq($(this).index()-1).addClass('logreg-active');
});
//点击登录的 关闭按钮
$('.btn-close').on('click',function(){
	$('.login-mask').css('display','none');
	$(this).parent().parent().css('display','none');
});

//点击完善资料中的跳过  提交注册信息后的 函数回调
$('.tjzl span').on('click',function(){
	$('.login-mask').css('display','none');
	$('.login').css('display','none');
	$('.register-next').css('display','none');
});

//用户栏失去焦点 登录
$('#UserName').blur(function(){
	checkPhone($(this));
});
//用户栏 获得焦点
$('#UserName').focus(function(){
	$(".error").hide();
    $('.error').removeClass("error");
    
});
 //密码栏失去焦点(mainform1)
$(".password").blur(function () {
    checkPass($(this));
    if(checkPass($("#login-pass"))&&checkPhone($('#UserName'))){
    	$('.login-btn').css('background','#d21313');
    }else{
    	$('.login-btn').css('background','#999');
    }
    if(checkPass($("#zc-pass"))&&checkPhone($('#myUserName'))&&checkCode($('#codeSpan'))){
    	$('#zc-btn').css('background','#d21313');
    }else{
    	$('#zc-btn').css('background','#999');
    }
    if(checkPass($("#forget-pass"))&&checkPhone($('#forget-call'))&&checkCode($('#forget-codeSpan'))){
    	$('#forget-btn').css('background','#d21313');
    }else{
    	$('#forget-btn').css('background','#999');
    }
});

//记住我
//每次页面加载时查看之前是否记住用户名和密码
$(document).ready(function(){
　　　　//如果cookie存在 那么获取cookie的值
	if ($.cookie("rmbUser") == "true") { 
		$("#rmbUser").attr("checked", true); 
		$("#UserName").val($.cookie("username")); 
		$("#login-pass").val($.cookie("password")); 
	} 
});
//点击监控是否勾选记住我
$('#RememberMe').change(function(){
	if($(this).is(':checked')){
		$(this).attr('data-check','true');
	}else{
		$(this).attr('data-check','false');
	}
});

//登录页面的 点击登录按钮

$('#login-form').submit(function(e){
	if(!checkPhone($("#UserName"))||!checkPass($("#login-pass"))){
		e.preventDefault();
        alert('登录失败');
        console.log(checkPhone($("#UserName")),checkPass($("#login-pass")));
        
	}else{
        alert(checkPhone($("#UserName")),checkPass($("#login-pass")));
        if($('#RememberMe').attr('data-check') == 'true'){
        	var userName = $("#UserName").val(); 
            var passWord = $("#login-pass").val(); 
        	$.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
		　　　$.cookie("username", userName, { expires: 7 });
		　　　$.cookie("password", passWord, { expires: 7 });
        }else{
        	$.cookie("rmbUser", "false", { expire: -1 });
		　　　$.cookie("username", "", { expires: -1 });
		　　　$.cookie("password", "", { expires: -1 });
        }
	}
});


//注册效果
//点击获取验证码效果
var jssec = 60;
var iw = 0;
var is = "loading";
var timer;

ControlBinding();
function ControlBinding() {
	
    //手机号栏失去焦点
    $('#myUserName').blur(function(){
		checkPhone($(this));
	});

    //手机号栏获得焦点
    $("#myUserName").focus(function () {
        $(".error").hide();
        $('.error').removeClass("error");
    });
    
    //验证码失去焦点
    $('#code').blur(function(){
    	$('#cSpan').show();
		checkCode($('#codeSpan'));
	});
    //验证码获取焦点
    $('#code').focus(function(){
		$('#cSpan').hide();
	});
	
    //点击获取验证码代码
    $("#getKey").click(function () {
    	alert($(this));
        if ("disabled" == $("#getKey").attr("disabled")) {
            return false;
        }
        //发送短信。成功：60秒计时器。到时后才能重发
        SendCode();
        //changes(); 短信成功后 才调用 
    });

    //短信验证码 获取焦点
    $('#CheckCode').focus(function(){
		$('#randomSpan').html('');
	});
    
	//密码框获得焦点
	$('.password').focus(function(){
		
        $(".error1").hide();
        $('.error1').removeClass("error1");
	});
    //密码框失去焦点
    $('.password').blur(function(){
		checkPass($(this));
	});
	
    //监控是否接受手提课协议条款
	$('#agree-check').change(function(){
		if($(this).is(':checked')){
			$(this).attr('data-check','true');
			console.log($(this).attr('data-check'));
		}else{
			$(this).attr('data-check','false');
			console.log($(this).attr('data-check'));
		}
	});
	
	//点击注册 提交form表单
	fnzc();
}
//点击获取验证码后 等待发送时 加载状态
function wait(obj) {
    if (iw++ < 3) {
        is += ".";
    } else {
        is = "loading";
        iw = 0;
    }
    obj.attr("disabled", true);
    obj.text(is);
    timer = setTimeout('wait(obj)', 1000);//调用自身实现
}
//点击获取验证码后 60秒内效果不能在点击  输入验证码框 可以输入 60秒后才能点击重新发送
function changes() {
	//如果过了60秒后 按钮的disabled为 true  即可再点 否则 为false 不能再点 然后移出输入验证码栏的 disabled 可以输入
    var s = jssec + "秒后重发";
    jssec--;
    if (jssec > -1) {
        timer = setTimeout('changes()', 1000);//调用自身实现
        $("#getKey").attr("disabled", true);
    }
    else {
        s = "重新发送";
        $("#getKey").attr("disabled", false);
        clearTimeout(timer);
    }
    //移除
    $("#CheckCode").removeAttr("disabled");
    $("#zc-btn").removeAttr("disabled");

    $("#getKey").text(s);
}

//如果验证码和手机号码都正确 可以点击 获取验证码 然后注册登录 
function SendCode() {
	console.log(!checkPhone($('#myUserName')),!checkCode($('#codeSpan')));
    if (!checkPhone($('#myUserName'))||!checkCode($('#codeSpan'))) { return };
    clearTimeout(timer);
    $(".phoneisexist").hide();
    $(".phoneisexist").html('');
    wait($('#getkey'));
    //提交电话号码 并对电话号码进行数据库查询 如果之前注册过 就不能再注册 没有注册过 就走changes
    $.post("SendCodeForReg", { 'telephone': $("#Telephone").val(), '__RequestVerificationToken': $('input[name=__RequestVerificationToken]').val() }, function (data) { 
    	$(".phoneisexist").hide();
        clearTimeout(timer);
        if (data) { //如果有返回值 也就是后台接收到数据 就调用 change 让输入框可以输入 并且 获取验证码按钮不能点击 60秒后 才能点击
            $(".phoneisexist").show();
            $(".phoneisexist").html('手机号已绑定其他账户');
            $("#getKey").text("获取验证码");
            $("#getKey").attr("disabled", false);
        } else {
            changes();
        }
    });
}

//点击注册按钮时 form表单提交
function fnzc(){
    $('#reg-form').submit(function(e){
        //判断 手机号 验证码 密码 是否同意条款 只要有一个没有填或选中 就注册失败
		if(!checkPhone($("#myUserName"))||!checkPass($("#zc-pass"))||!checkCode($('#codeSpan'))||!$("#agree-check").attr('data-check')){

			e.preventDefault();
			alert('登录失败');
		}else{
			//注册成功跳转到完善资料页面
			//$('#reg-form').submit();
			console.log('注册成功');
			$('.login').css('display','none');
            $('.register-next').css('display','block');
            e.preventDefault();
		}
	});
    
}

//手机号码验证 验证格式 或者 失去焦点同时也验证后台是否注册过
function checkPhone(obj) {
    reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

    if (obj.val().length == 0) {
        obj.next().addClass("error");
        $(".error").html("*请输入手机号");
        $(".error").show();
    }
    else if (obj.val().length != 11) {
        obj.next().addClass("error");
        $(".error").html("*手机号长度有误！");
        $(".error").show();
    }
    else if (!reg.test(obj.val())) {
        obj.next().addClass("error");
        $(".error").html("*请输入正确的手机号!");
        $(".error").show();
    }
    else {
        
        return true;
    }
    return false;
}


/*创建验证码*/
createCode($('#codeSpan'));
function createCode(obj){
	//创建4位数字验证码
//	var num=parseInt(Math.random()*9000+1000);
	//获取span对象
//	var span=document.getElementById("codeSpan");
	//将验证码存放进span标签中
//	span.innerHTML=num;

    //创建随机四位数字和字母 验证码
    var code = "";
	var codeLength = 4; //验证码的长度 
	var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
		'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数 
	for(var i = 0; i < codeLength; i++) { //循环操作 
		var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35） 
		code += random[index]; //根据索引取得随机数加到code上 
	}
	obj.html(code); //把code值赋给验证码 
	
}
/*封装校验代码*/
function checkField(id,regex){
	//获取pwd标签对象
	var inp=document.getElementById(id);
	//获取用户密码信息
	var val=inp.value;
	//创建正则表达式
	var regex=regex;
	//获取span标签对象，用于存放校验信息
	var span=document.getElementById(id+"Span");
	//开始校验
	if(val==""||val==null){
		span.innerHTML="*"+inp.alt+"不能为空";
		span.style.color="red";
		return false;
	}else if(regex.test(val)){
		span.innerHTML="*"+inp.alt+"合法";
		span.style.color="green";
		return true;
	}else{
		span.innerHTML="*"+inp.alt+"不合法";
		span.style.color="red";
		return false;
	}	
}
/*验证码校验*/
function checkCode(obj){
	//获取codeSpan对象 自动生成的验证码
	var wcode = obj.html();
	//获取用户书写的验证码
    var ucode=obj.prev().val().toUpperCase(); //转化为大写
	//获取span对象
	var span=obj.next();
	//开始校验
	if(ucode==""||ucode==null){
		span.html("*验证码不能为空");
		span.css('color','red');
		return false;
	}else if(ucode==wcode){
		span.html("*验证码OK");
		span.css('color','green');
		return true;
	}else{
		span.html("*验证码不正确");
		span.css('color','red');
		return false;
	}
}

//短信校验代码  obj是后台传过来的验证码
function checkrandomSpan(obj){
	//获取span
	var span = $('#randomSpan');
	//获取后台传过来的验证码信息
	var wcode = obj;
	//获取用户书写的验证码
	var ucode = $("#CheckCode").val();
	//开始校验
	if(ucode==""||ucode==null){
		span.html("*验证码不能为空");
		span.css('color','red');
		return false;
	}else if(ucode==wcode){
		span.html("*验证码OK");
		span.css('color','green');
		return true;
	}else{
		span.html("*验证码不正确");
		span.css('color','red');
		return false;
	}
}

//密码验证
function checkPass(obj){
	reg1 = /^.*[\d]+.*$/;
    reg2 = /^.*[A-Za-z]+.*$/;
    reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码
    var Pval = obj.val();
    
    if (Pval == '') {
        obj.next().addClass("error1");
        $(".error1").html("*请填写密码");
        $(".error1").show();
    }
    else if (Pval.length > 16 || Pval.length < 8) {
        obj.next().addClass("error1");
        $(".error1").html("*密码应为8-16个字符，区分大小写");
        $(".error1").show();
    }
	else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
	    obj.next().addClass("error1");
	    $(".error1").html("*需至少包含数字、字母和符号中的两种类型");
	    $(".error1").show();
	}
    else {
       
        return true;
    }
    return false;
}



//找回密码
//点击登录页面的忘记密码 效果
$('.login-forget').click(function(){
	$('.login').css('display','none');
	$('.forgetpass').css('display','block');
});
//手机号栏失去焦点
$('#forget-call').blur(function(){
	checkPhone($(this));
});

//手机号栏获得焦点
$("#forget-call").focus(function () {
    $(".error").hide();
    $(".error").removeClass('error');
});
//生成验证码
createCode($('#forget-codeSpan'));
//验证码失去焦点
$('#forget-code').blur(function(){
	$('#forget-cSpan').show();
	checkCode($('#forget-codeSpan'));
	
});
//验证码获取焦点
$('#forget-code').focus(function(){
	$('#forget-cSpan').hide();
	
});

//短信验证码 获取焦点
$('#forget-CheckCode').focus(function(){
	$('#forget-randomSpan').html('');
});

//密码框获得焦点
$('.password').focus(function(){
    $(".error1").hide();
    $(".error1").removeClass('error1');
});
//密码框失去焦点
$('.password').blur(function(){
	checkPass($(this));
});
//点击获取验证码 获取短信验证
$("#foregt-getKey").click(function () {

    if ("disabled" == $("#forget-getKey").attr("disabled")) {
        return false;
    }
    //发送短信。成功：60秒计时器。到时后才能重发
    forgetSendCode();
    //changes(); 短信成功后 才调用 
});

//提交找回密码 form表单

$('#forget-form').submit(function(e){
    //判断 手机号 验证码 密码 是否同意条款 只要有一个没有填或选中 就注册失败
	if(!checkPhone($("#forget-call"))||!checkPass($("#forget-pass"))||!checkCode($('#forget-codeSpan'))){
//					console.log(!checkPhone($("#forget-call"))||!checkPass($("#forget-pass"))||!checkCode($('#forget-codeSpan')));
		e.preventDefault();
			alert('登录失败');
	}else{
			//注册成功跳转到完善资料页面
			//$('#forget-form').submit();
			console.log('注册成功');
			$('.forgetpass').css('display','none');
            e.preventDefault();
	}
});


//如果验证码和手机号码都正确 可以点击 获取验证码 然后注册登录
function forgetSendCode() {
    if (!checkPhone($('#forget-call'))||!checkCode($('#forget-codeSpan'))) { return };
    clearTimeout(timer);
    
    wait($('#forget-getkey'));
    $.post("SendCodeForReg", { 'telephone': $("#Telephone").val(), '__RequestVerificationToken': $('input[name=__RequestVerificationToken]').val() }, function (data) {
        clearTimeout(timer);
        if (data) { //如果有返回值 也就是后台接收到数据 就调用 change 让输入框可以输入 并且 获取验证码按钮不能点击 60秒后 才能点击
            forgetchanges();
        } else {
            $("#forget-getKey").text("获取验证码");
            $("#gorget-getKey").attr("disabled", false);
        }
    });
}

//点击获取验证码后 60秒内效果不能在点击  输入验证码框 可以输入 60秒后才能点击重新发送
function forgetchanges() {
	//如果过了60秒后 按钮的disabled为 true  即可再点 否则 为false 不能再点 然后移出输入验证码栏的 disabled 可以输入
    var s = jssec + "秒后重发";
    jssec--;
    if (jssec > -1) {
        timer = setTimeout('forgetchanges()', 1000);//调用自身实现
        $("#forget-getKey").attr("disabled", true);
    }
    else {
        s = "重新发送";
        $("#forget-getKey").attr("disabled", false);
        clearTimeout(timer);
    }
    //移除
    $("#forget-CheckCode").removeAttr("disabled");
    $("#forget-btn").removeAttr("disabled");

    $("#forget-getKey").text(s);
}



$('#fpyhm').blur(function(){
	yhm($(this));
});
$('#fpyhm').focus(function(){
	$(".error2").hide();
	$(".error2").removeClass('error2');
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
