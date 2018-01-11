// 商品详情js


// 收藏
$(".collet i").on("click",function(){
	if ($(this).hasClass("icon-shoucang9")) {
		console.log(111);
		$(this).addClass("icon-star-fill").removeClass("icon-shoucang9");
	}else
	{
		$(this).addClass("icon-shoucang9").removeClass("icon-star-fill");
		console.log(111);
	}
})

// 评论列表复制看效果
var list = ('<li class="comment-item"> <div class="info ov"> <span class="user-info">a**0</span> <time>16/11/11</time> </div> <div class="start"> <img src="images/icon/icon_star@2x.png" alt=""> <img src="images/icon/icon_star@2x.png" alt=""> <img src="images/icon/icon_star_set@2x.png" alt=""> </div> <ul class="pics ov"> <li><img src="images/default.jpg"></li> <li><img src="images/default.jpg"></li> <li><img src="images/default.jpg"></li> </ul> <blockquote>衣服面料特别舒服，很柔软很贴身，上身效果特别好，130斤以内都能穿，特别淑女！戚米家的忠实粉丝！价格实惠，质量好！</blockquote> </li>');
$(".comment-list").append(Array(4).fill(list));

$(function(){
	// 选择尺码
	$(".size-box a").on('click',function(){
		$(this).addClass("active").siblings().removeClass('active');
	})
	// 数量 -
	$(".number .minus").on('click',function(){
		var txt = parseInt($(this).next().val());
		if (txt>1) {
			$(this).next().val(txt-1);
			$(this).siblings(".plus").css("color","#666");
		}
		else{
			alert("请至少选择一个，谢谢！");
			$(this).css("color","#ccc");
		}
	})
	// 数量 +
	$(".number .plus").on('click',function(){
		var txt = parseInt($(this).prev().val());
		if (txt>=10) {
			$(this).css("color","#ccc");
			console.log(333);
			alert("库存不够");
		}
		else{
			$(this).prev().val(txt+1);
			$(this).siblings(".minus").css("color","#666");
		}
	})
	// 商品/评论切换
	$(".goodsbar a").on('click',function(){
		$(this).addClass("current").siblings().removeClass('current');
		$(".detail-content .table").eq($(this).index()).show().siblings().hide();
	})
})