$(function(){
//	大屏banner
	$('.H-head-icon-list').on('click',function(){
		$('.H-list-box').slideToggle(200);
	})
	var now=0,next=0;
	var ban=$('.H-banner-img');
	var nav=$('.H-nav li');
	function move(){
		next=now+1;
		if(next>ban.length-1){
			next=0;
		}
		ban.eq(now).removeClass('first').end().eq(next).addClass('first');
		nav.eq(now).removeClass('nav-active').end().eq(next).addClass('nav-active');
		now=next;
	}
	var t=setInterval(move,3000);
	ban.mousemove(function(){
		$(this).clearQueue();
		clearInterval(t);
	}).mouseout(function(){
		$(this).clearQueue();
		t=setInterval(move,3000);
	})
	nav.click(function(){
		$(this).clearQueue();
		let index=$(this).index();
			ban.eq(now).removeClass('first').end().eq(index).addClass('first');
			nav.eq(now).removeClass('nav-active').end().eq(index).addClass('nav-active');
			now=index;
	})
//选项卡
	
$('.H-custom-tab li').mousemove(function(){
	$('.H-custom-tab li').removeClass('tab-active');
	$(this).addClass('tab-active');
	let index=$(this).index()
	$('.customBox').css('display','none').eq(index).css('display','block')
})
//middle轮播
var next_2=0,now_2=0,video_m=$('.video-middle');
function move_2(){
	next_2=now_2+1;
	if(next_2>video_m.length-1){
		next_2=0;
	}
	video_m.eq(next_2).fadeIn('slow').end().eq(now_2).fadeOut('slow');
	$('.middle-tab li').removeClass('middle-active').eq(next_2).addClass('middle-active')
	now_2=next_2;
}
var t_2=setInterval(move_2,2000)

//返回顶部
let top=$('.celantop');
	top.click(function(){
	$(document.documentElement).animate({scrollTop:0},800);
	$(document.body).animate({scrollTop:0});
	})
//$(window).scroll(function(e){
//	let top=document.documentElement.scrollTop||document.body.scrollTop;
//	if(top>4000){
//		$('.H-camera').fadeIn('slow').animate({right:50})
//	}else{
//		$('.H-camera').fadeOut('slow')
//	}
//})

})//onload结束

