$(function () {
	//用户栏获得焦点
	$('#UserName').focus(function(){
		$(".password").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
	});
    
    //用户栏失去焦点
    $('#UserName').blur(function(){
    	checkPhone();
    });
    
    //密码栏获得焦点(mainform1)
    $(".password").focus(function () {
        $(".password").parent().removeClass("errorC");
        $(this).parent().removeClass("checkedN");
        //$(".error3").hide(); 
    });

    //密码栏失去焦点(mainform1)
    $(".password").blur(function () {
        reg1 = /^.*[\d]+.*$/;
        reg2 = /^.*[A-Za-z]+.*$/;
        reg3 = /^.*[_@#%&^+-/*\/\\]+.*$/;//验证密码
        var Pval = $(".password").val();

        if (Pval == "") {
            $(".password").parent().addClass("errorC");
            $(".error3").html("请填写密码");
            $(".error3").css("display", "block");
        }
        else if (Pval.length > 16 || Pval.length < 8) {
            $(".password").parent().addClass("errorC");
            $(".error3").html("密码应为8-16个字符，区分大小写");
            $(".error3").css("display", "block");
        }
            //else if (!((reg1.test(Pval) && reg2.test(Pval)) || (reg1.test(Pval) && reg3.test(Pval)) || (reg2.test(Pval) && reg3.test(Pval)))) {
            //    $(".password").parent().addClass("errorC");
            //    $(".error3").html("需至少包含数字、字母和符号中的两种类型");
            //    $(".error3").css("display", "block");
            //}
        else {
            $(".error3").hide();
            $(".password").parent().addClass("checkedN");
        }
    });
    
    //记住我文字点击
    $(".pointer").click(function () {
        $(".checkboxPic").click();
    })

    //记住我
    $(".checkboxPic").click(function () {
        if ($(this).attr("isshow") == "false") {
            //$(this).parent().css("margin-bottom", "10px");
            $(".checkboxPic i").css({ "background-position": " -0px -127px" });
            //$(".otherError").css("display", "block");
            $(this).attr("isshow", "true");
            $("#RememberMe").attr("checked", false)
        }
        else {
            //$(this).parent().css("margin-bottom", "");
            $(".checkboxPic i").css({ "background-position": "-31px -127px" });
            //$(".otherError").hide();
            $(this).attr("isshow", "false");
            $("#RememberMe").attr("checked", true)
        }

    });
    //登录点击
    $(".btnlogin").click(function () {
        if ($("form").val()) {
            $("form").submit();
//          $(".btnlogin").attr("disabled", true);
        }
    })
    
    //手机号码验证
    function checkPhone() {
	    reg = /^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)
	
	    if ($('#UserName').val() == "") {
	        $('#UserName').parent().addClass("errorC");
	        $(".error1").html("请输入手机号");
	        $(".error1").css("display", "block");
	    }
	    else if ($('#UserName').val().length < 11) {
	        $('#UserName').parent().addClass("errorC");
	        $(".error1").html("手机号长度有误！");
	        $(".error1").css("display", "block");
	    }
	    else if (!reg.test($('#UserName').val())) {
	        $('#UserName').parent().addClass("errorC");
	        $(".error1").html("请输入正确的手机号!");
	        $(".error1").css("display", "block");
	    }
	    else {
	        $('#UserName').parent().addClass("checkedN");
	        return true;
	    }
	    return false;
	}
    
    /*WB2.anyWhere(function (W) {
        W.widget.connectButton({
            id: "wb_connect_btn",
            type: '1,5',
            callback: {
                login: function (o) {    //登录后的回调函数
                    //$.ajax({
                    //    type: "POST",
                    //    url: "./?mod=ajax&app=ajax_login&act=weibo",
                    //    async: false,
                    //    data: { 'login': 'only' },
                    //    success: function (msg) {
                    //        if (msg == 'yes') {
                    //            你的操作
                    //        }
                    //    }
                    //});

                }
            }
        });
    });*/

});

function weibo_login(){
    $(".WB_loginButton").click();
}