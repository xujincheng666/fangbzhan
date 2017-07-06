window.onload=function(){

	$(function() {
		$(window).scroll(function() {
			var t = $(this).scrollTop();
			if (t > 300) {
				$(".top").stop().fadeIn(300);
			} else {
				$(".top").stop().fadeOut(300);
			}
			// if(t>700){
			// 	$("#youdaohang").stop().css("position","absolute","top","0")
			// }
		});

		$(".top").click(function() {
			$("body,html").stop().animate({
				scrollTop: 0
			}, 300); //html是为了兼容火狐和IE
		});
		$("#shouye").click(function() {
			$("body,html").stop().animate({
				scrollTop: 0
			}, 300); //html是为了兼容火狐和IE
		});
		$("#tuiguang").click(function() {
			$("body,html").stop().animate({
				scrollTop: 510
			}, 300); //html是为了兼容火狐和IE
		});
		$("#zhibo").click(function() {
			$("body,html").stop().animate({
				scrollTop: 850
			}, 300); //html是为了兼容火狐和IE
		});
		$("#qwe").click(function() {
			$("body,html").stop().animate({
				scrollTop: 1100
			}, 300); //html是为了兼容火狐和IE
		});
	});



	$("#nav").children("li").mouseover(function () {
		$(this).css("background","#e0e0e0");
	});
	$("#nav").children("li").mouseout(function () {
		$(this).css("background","white","opacity","0.5");
	});


	$("#nav1").children("li").mouseover(function () {
		$(this).css("background","#e0e0e0");
	});
	$("#nav1").children("li").mouseout(function () {
		$(this).css("background","white","opacity","0.5");
	});

	$("#tougao").children("li").mouseover(function () {
		$(this).css("background","#f75a96");
		$("#tougaokuozhan").css("display","block");
	});
	$("#tougao").children("li").mouseout(function () {
		$(this).css("background","#da5380");
		$("#tougaokuozhan").css("display","none");
	});


	$("#tougaokuozhan").mouseover(function () {
		$("#tougaokuozhan").css("display","block");
	});
	$("#tougaokuozhan").mouseout(function () {
		$("#tougaokuozhan").css("display","none");
	});

	// 扩展的显示隐藏
	$("#tougaokuozhan").mouseover(function () {
		$("#tougaokuozhan").css("display","block");
	});
	$("#tougaokuozhan").mouseout(function () {
		$("#tougaokuozhan").css("display","none");
	});
    // 扩展的显示隐藏


	$("#tougaokuozhan").children("ul").children("li").mouseover(function () {
		$(this).css("background","#EDEDED");
	});
	$("#tougaokuozhan").children("ul").children("li").mouseout(function () {
		$(this).css("background","#FFFFFF");
	});

	$("#donghua1").mouseover(function () {
		$("#donghua").css("display","block");
	});
	$("#donghua1").mouseout(function () {
		$("#donghua").css("display","none");
	});

	$("#fanju1").mouseover(function () {
		$("#fanju").css("display","block");
	});
	$("#fanju1").mouseout(function () {
		$("#fanju").css("display","none");
	});

	$("#guochan1").mouseover(function () {
		$("#guochan").css("display","block");
	});
	$("#guochan1").mouseout(function () {
		$("#guochan").css("display","none");
	});

	$("#yinyue1").mouseover(function () {
		$("#yinyue").css("display","block");
	});
	$("#yinyue1").mouseout(function () {
		$("#yinyue").css("display","none");
	});

	$("#wudao1").mouseover(function () {
		$("#wudao").css("display","block");
	});
	$("#wudao1").mouseout(function () {
		$("#wudao").css("display","none");
	});

	$("#youxi1").mouseover(function () {
		$("#youxi").css("display","block");
	});
	$("#youxi1").mouseout(function () {
		$("#youxi").css("display","none");
	});
	$("#keji1").mouseover(function () {
		$("#keji").css("display","block");
	});
	$("#keji1").mouseout(function () {
		$("#keji").css("display","none");
	});
	$("#shenghuo1").mouseover(function () {
		$("#shenghuo").css("display","block");
	});
	$("#shenghuo1").mouseout(function () {
		$("#shenghuo").css("display","none");
	});
	$("#guichu1").mouseover(function () {
		$("#guichu").css("display","block");
	});
	$("#guichu1").mouseout(function () {
		$("#guichu").css("display","none");
	});
	$("#shishang1").mouseover(function () {
		$("#shishang").css("display","block");
	});
	$("#shishang1").mouseout(function () {
		$("#shishang").css("display","none");
	});
	$("#guanggao1").mouseover(function () {
		$("#guanggao").css("display","block");
	});
	$("#guanggao1").mouseout(function () {
		$("#guanggao").css("display","none");
	});
	$("#yule1").mouseover(function () {
		$("#yule").css("display","block");
	});
	$("#yule1").mouseout(function () {
		$("#yule").css("display","none");
	});
	$("#yinshi1").mouseover(function () {
		$("#yinshi").css("display","block");
	});
	$("#yinshi1").mouseout(function () {
		$("#yinshi").css("display","none");
	});
};
// $(document).ready(function () {
// 	$("#guanggaolunbo>ol>li").mouseover(function () {
// 		var num=$(this).index();
// 		$("#guanggaolunbo ul li").eq(num).show().siblings().hide();
// 		$("#guanggaolunbo>ol>li").eq(num).css("background","#ffffff").siblings().css("background","yellow");
// 	});
// 	setInterval(function () {
// 		var length=400;
// 		$("#guanggaolunbo>ul>li").animate({right:length+"px"})
// 	},1000);
//
// });
//



