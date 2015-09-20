$(".expanded").on("touchend",function(e){
	var key = parseInt($("#chooseType").data("now"));
	if($(this).hasClass("up")){
		$(this).removeClass("up").addClass("down");
		$(".cm-header-list").css({display: 'block'}).addClass("animated fadeIn");

		$(".cm-header-list > li").show();
		$(".cm-header-list > li").eq(key).hide();
	}
	else if($(this).hasClass("down")){
		$(this).removeClass("down").addClass("up");
		$(".cm-header-list").removeClass("fadeIn").css({display: 'none'}).removeClass("animated fadeIn");
	}
	//e.stopPropagation();
	//e.preventDefault();
	//return false;
});

$("#cm-share-btn").on("touchstart",function() {
	$(".pop-wrap").show();
	$(".pop-wrap > .share-pop").show();
	$(".pop-wrap > .share-pop").removeClass("hidden");

	//ÅÐ¶ÏÎ¢ÐÅÄÚÖÃä¯ÀÀÆ÷
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		$(".share-wx-tips").css("visibility" , "visible");
 	} else {
		$(".share-wx-tips").css("visibility" , "hidden");
	}
});

$(".share-footer-wx").on("touchstart",function() {
	$(".pop-wrap").show();
	$(".pop-wrap > .share-pop").show();
	$(".pop-wrap .share-icon").hide();
});

$(".jtico_lookcode").on("touchstart",function() {
	$(".pop-wrap").show();
	$(".pop-wrap > .pop-lookcode").show();
});

$(".share-pop > .share-close").on("touchend",function(e) {
	$(this).parent().hide();
	$(".pop-wrap").hide();
	$(".share-pop").addClass("hidden");
	$(".pop-wrap .share-icon").show();
	e.stopPropagation();
	e.preventDefault();
	return false;
});

$(".pop-lookcode > .share-close").on("touchend",function(e) {
	
	if($(".share-pop").hasClass("hidden")){
		$(this).parent().hide();
		$(".pop-wrap").hide();
	}else{
		$(this).parent().hide();
	}
	e.stopPropagation();
	e.preventDefault();
	return false;
});

//×ó²àµ¼º½Çý¶¯
$("#cm-nav-btn , .mask").on("touchend" , function(e){
	if($(".mainbody").hasClass("on")){
		$(".mainbody").removeClass("on");
		$(".nav-right").removeClass("on");
		
		e.stopPropagation();
		e.preventDefault();
		setTimeout(function(){
			$(".mask").hide();
		},320);
		return false;
	}else{
		$(".mainbody").addClass("on");
		$(".nav-right").addClass("on");
		$(".mask").show();
	}
});

//×ó²àµ¼º½ µ±Ç°¸ßÁÁ
function navCurr(key){
	$(".nav-right > dl > dd").removeClass("on");
	$(".nav-right-"+key).addClass("on")
}


$(function(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		$(".share-footer > .share-icon > .jiathis_button_weixin").hide(); 
		$(".share-footer-wx").show();
 	} else {
		$(".share-footer-wx").hide();
	}
})