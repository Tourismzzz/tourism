$(function(){
//	大屏banner
	$('.H-head-icon-list').on('touchstart',function(){
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
	
})