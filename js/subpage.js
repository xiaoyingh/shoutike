//筛选条件
//screenSX($("[name='mode']"));
//screen;SX($("[name='stage']"));
//screenSX($("[name='board']"));
function screenSX(obj){
	obj.each(function(){
		$(this).on('click',function(){
			obj.removeClass('on');
			$(this).addClass('on');
		});
	});
}

var data = [
    {
        "children": [
            
        ],
        "typeName": "学前",
        "id": 188,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 195,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 204,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 212,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "一年级",
                "id": 191,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 197,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 203,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 214,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "二年级",
                "id": 196,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 192,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 193,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 194,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "三年级",
                "id": 202,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 211,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 213,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 215,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "四年级",
                "id": 205,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 201,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 217,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 218,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "五年级",
                "id": 216,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 220,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 221,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 222,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "六年级",
                "id": 219,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "绘画",
                "id": 297,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "记忆法",
                "id": 298,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "古诗",
                "id": 304,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "学习方法",
                "id": 307,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "家庭教育",
                "id": 308,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "国学",
                "id": 309,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "小学",
        "id": 189,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 224,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 225,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 226,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 257,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 258,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 259,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "地理",
                        "id": 260,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "初一",
                "id": 223,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 228,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 229,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 230,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "物理",
                        "id": 261,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 263,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 264,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 265,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "地理",
                        "id": 266,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "初二",
                "id": 227,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 232,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 233,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 234,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "物理",
                        "id": 267,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "化学",
                        "id": 268,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 269,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 270,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 271,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "地理",
                        "id": 272,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "初三",
                "id": 231,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "初中",
        "id": 190,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "物理",
                        "id": 236,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 237,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 238,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 273,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 274,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "化学",
                        "id": 275,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 276,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 277,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "地理",
                        "id": 278,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "高一",
                "id": 235,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "物理",
                        "id": 240,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 279,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 280,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "外语",
                        "id": 281,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "化学",
                        "id": 282,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 283,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 284,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 285,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "地理",
                        "id": 286,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "高二",
                "id": 239,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "语文",
                        "id": 242,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 243,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 244,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "物理",
                        "id": 245,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 287,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "化学",
                        "id": 288,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "生物",
                        "id": 289,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "历史",
                        "id": 290,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 291,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "高三",
                "id": 241,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "高中",
        "id": 206,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "政治",
                        "id": 247,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "英语",
                        "id": 248,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "数学",
                        "id": 249,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "公共课",
                "id": 246,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    {
                        "children": [
                            
                        ],
                        "typeName": "医学",
                        "id": 292,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "金融",
                        "id": 293,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "管理",
                        "id": 294,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    },
                    {
                        "children": [
                            
                        ],
                        "typeName": "法律",
                        "id": 295,
                        "sort": null,
                        "parentID": 0,
                        "identify": null
                    }
                ],
                "typeName": "专业课",
                "id": 250,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "考研",
        "id": 207,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    
                ],
                "typeName": "英语",
                "id": 251,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "其他",
                "id": 252,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "法语",
                "id": 296,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "语言",
        "id": 208,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            
        ],
        "typeName": "思享",
        "id": 209,
        "sort": null,
        "parentID": 0,
        "identify": null
    },
    {
        "children": [
            {
                "children": [
                    
                ],
                "typeName": "声乐",
                "id": 253,
                "sort": null,
                "parentID": 0,
                "identify": null
            },
            {
                "children": [
                    
                ],
                "typeName": "艺考",
                "id": 254,
                "sort": null,
                "parentID": 0,
                "identify": null
            }
        ],
        "typeName": "艺术",
        "id": 210,
        "sort": null,
        "parentID": 0,
        "identify": null
    }
]

$('#kcpl').empty();
$('#kcjd').empty();
$('#kcclass').empty();
$('<a href="javascript:;" name="mode" class="all on">全部</a>').appendTo($('#kcpl'));
$('<a href="javascript:;" name="stage" class="all on">全部</a>').appendTo($('#kcjd'));
$('<a href="javascript:;" name="board" class="all on">全部</a>').appendTo($('#kcclass'));
creatNav(data,'mode',$('#kcpl'));
function creatNav(arry,className,wrapName){
	$.each(arry,function(i,val){
		$('<a href="javascript:;" name="'+className+'" class="sx_child" data-id="'+arry[i].id+'">'+arry[i].typeName+'</a>').appendTo(wrapName);
	});
}
$.each(data,function(i,val){
	//console.log(data[i].children);
	creatNav(data[i].children,'stage',$('#kcjd'));
	$.each(data[i].children,function(j,val){
		//console.log(data[i].children[j].children);
		creatNav(data[i].children[j].children,'board',$('#kcclass'));
	});
});

//生成对应的热门课程
function creatRmkc(arry,name){
	name.empty();
	$.each(arry, function(i,val) {
		$('<li class="clearfix side-active"><a href="javascript:;"><p class="cont">'+arry[i].title+'</p></a></li>').appendTo(name);
	});
}

//生成对应课程
function creatKc(arry,name){
	name.empty();
	$.each(arry, function(i,val) {
		$('<li><a href="javascript:;"><div class="kc"><div class="kctop"><img class="lazy" alt="" width="200" height="124" data-original="img/example.jpg" src="../img/pic03.jpg" /></div><div class="kcmask"></div></div><div class="texts"><div class="titles ellipsis">'+arry[i]+'</div><div class="kcsm"><div class="kcsm-top"><p><span></span><span>'+arry[i]+'</span></p><p><em>￥'+arry[i]+'</em></p></div><div class="kcsm-foot"><p>'+arry[i]+'</p></div></div></div></a></li>').appendTo(name);
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

//分页数据
var data = {
    "seriests": null,
    "pageInfo": {
        "pageNum": 1,
        "pageSize": 16,
        "size": 16,
        "startRow": 1,
        "endRow": 16,
        "total": 129,
        "pages": 9,
        "list": [
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "ff",
                "free": null,
                "typeName": null,
                "id": 144,
                "publishTime": null,
                "title": "独树一帜的学习方法",
                "picURL": "xuefang.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 45830,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 358,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "307",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": null
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 165,
                "publishTime": null,
                "title": "英语单词精讲一单元",
                "picURL": "huyi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 457471,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 895,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 166,
                "publishTime": null,
                "title": "英语单词精讲二单元",
                "picURL": "huer.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 56044,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 167,
                "publishTime": null,
                "title": "英语单词精讲三单元",
                "picURL": "husan.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 78656,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 168,
                "publishTime": null,
                "title": "英语单词精讲四单元",
                "picURL": "husi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 889829,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": "husi.jpg",
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 169,
                "publishTime": null,
                "title": "英语同步精讲一单元",
                "picURL": "20171023183855.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 25934,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": "datyi.jpg",
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 170,
                "publishTime": null,
                "title": "英语同步精讲二单元",
                "picURL": "20171023183845.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 557102,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 171,
                "publishTime": null,
                "title": "英语同步精讲三单元",
                "picURL": "20171023183834.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 256447,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 172,
                "publishTime": null,
                "title": "英语同步精讲四单元",
                "picURL": "20171023183820.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 56929,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "212"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 173,
                "publishTime": null,
                "title": "数学同步精讲一单元",
                "picURL": "20171023181922.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 456981,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "204"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 174,
                "publishTime": null,
                "title": "数学同步精讲二单元",
                "picURL": "20171023181945.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 445769,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "204"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 175,
                "publishTime": null,
                "title": "数学同步精讲三单元",
                "picURL": "20171023182008.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 96686,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "204"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 176,
                "publishTime": null,
                "title": "数学同步精讲四单元",
                "picURL": "20171023182021.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 45147,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "204"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "vphigh",
                "free": null,
                "typeName": null,
                "id": 177,
                "publishTime": null,
                "title": "唐诗三百首-有范儿语文",
                "picURL": "tang.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 65813,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "304",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": ""
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "ff",
                "free": null,
                "typeName": null,
                "id": 178,
                "publishTime": null,
                "title": "小学培优",
                "picURL": "peiyou.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 45118,
                "pmtsTot": 0,
                "isPrice": 1,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "191",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "204"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 179,
                "publishTime": null,
                "title": "数学同步课堂一单元",
                "picURL": "20171023182037.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 854858,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 8000,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "196",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "203"
            }
        ],
        "prePage": 0,
        "nextPage": 2,
        "isFirstPage": true,
        "isLastPage": false,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
        ],
        "navigateFirstPage": 1,
        "navigateLastPage": 8,
        "firstPage": 1,
        "lastPage": 8
    }
}

var data2 = {
    "seriests": null,
    "pageInfo": {
        "pageNum": 6,
        "pageSize": 16,
        "size": 16,
        "startRow": 81,
        "endRow": 96,
        "total": 129,
        "pages": 9,
        "list": [
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 244,
                "publishTime": null,
                "title": "小学六年级单词精讲unit4",
                "picURL": "hukiuyiyiyierersisi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 9869,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 80,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 245,
                "publishTime": null,
                "title": "小学六年级 语法精讲unit1",
                "picURL": "huliankuyiyiy.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 25712,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 67,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 246,
                "publishTime": null,
                "title": "小学六年级 unit2",
                "picURL": "huliukuier.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 9855,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 89,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 247,
                "publishTime": null,
                "title": "小学六年级 unit3",
                "picURL": "huliukuiersnsansan.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 96588,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 670,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 248,
                "publishTime": null,
                "title": "小学六年级英语unit4",
                "picURL": "huliukuiersnsisi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 65335,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 410,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 249,
                "publishTime": null,
                "title": "小学六年级unit1",
                "picURL": "20171023183352.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 98577,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 432,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 250,
                "publishTime": null,
                "title": "小学六年级 unit2",
                "picURL": "20171023183339.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 56992,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 530,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 251,
                "publishTime": null,
                "title": "小学六年级 unit3",
                "picURL": "20171023183328.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 32661,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 990,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 252,
                "publishTime": null,
                "title": "小学六年级课文精讲unit4",
                "picURL": "20171023183315.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 65988,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 30,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "222"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 253,
                "publishTime": null,
                "title": "六年级一单元 分数除法",
                "picURL": "yuyuyiyiyi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 69829,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 0,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 94,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "221"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 254,
                "publishTime": null,
                "title": "六年级二单元 位置与方向",
                "picURL": "yuyuyiyiyierer.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 98542,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 0,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 328,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "221"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 255,
                "publishTime": null,
                "title": "六年级三单元—分数除法",
                "picURL": "yuyuyiyiyierersansan.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 65251,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 0,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 430,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "221"
            },
            {
                "fupin": 1,
                "search": null,
                "fullname": null,
                "publi": 1,
                "syn": "sy",
                "free": null,
                "typeName": null,
                "id": 256,
                "publishTime": null,
                "title": "六年级四单元——比",
                "picURL": "yuyuyiyiyierersisi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 48571,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 0,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 320,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "221"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "ff",
                "free": null,
                "typeName": null,
                "id": 257,
                "publishTime": null,
                "title": "小升初应用题专题",
                "picURL": "xiaoshengchu.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 79854,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 197,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "221"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "ff",
                "free": null,
                "typeName": null,
                "id": 258,
                "publishTime": null,
                "title": "什么样的立意让文章脱颖而出",
                "picURL": "zuowenliyi.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 98587,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 870,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "219",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": "220"
            },
            {
                "fupin": 0,
                "search": null,
                "fullname": null,
                "publi": 0,
                "syn": "hobby",
                "free": null,
                "typeName": null,
                "id": 259,
                "publishTime": null,
                "title": "5分钟学绘画 so easy",
                "picURL": "huihuaxiao.jpg",
                "createTime": null,
                "price": 0,
                "clickRate": 98848,
                "pmtsTot": 0,
                "isPrice": 0,
                "realPrice": 49,
                "teacherID": 0,
                "isValid": 0,
                "thuPicURL": null,
                "collection": 901,
                "timeLimit": 0,
                "picURL2": null,
                "isDiscount": 0,
                "type2Value": "297",
                "videoCount": 0,
                "remark": "",
                "typeValue": "189",
                "type3Value": null
            }
        ],
        "prePage": 5,
        "nextPage": 7,
        "isFirstPage": false,
        "isLastPage": false,
        "hasPreviousPage": true,
        "hasNextPage": true,
        "navigatePages": 8,
        "navigatepageNums": [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "navigateFirstPage": 2,
        "navigateLastPage": 9,
        "firstPage": 2,
        "lastPage": 9
    }
}


