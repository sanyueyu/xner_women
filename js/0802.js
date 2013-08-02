XNE_ad = (function ($) {
 var small_flash = {
	 	src: null,
		name: "ad_bet_be",
		width: 260,
		height:328,
		link: null,//连接地址
		id: "ad_bet_be",//div的ID
		firstTime: 1
	},
	 big_flash = {
	 	src: null,
		name: "ad_bet",
		width: 520,
		height:328,
		link: null,//连接地址
		id: "ad_bet",//div的ID
		firstTime: 1
	},
	cookie =  {
				name: "det",
				time: 24,
				count: 3
	},
	sohuvd = new Cookie(document, "ad_det",24),
	timer;
 function loadFlash (flash) {//加载flash
		 var sohuFlash2 = new sohuFlash(flash.src, flash.name, flash.width, flash.height,"7");
    	sohuFlash2.addParam("quality", "high");
    	sohuFlash2.addParam("wmode", "transparent");
   		sohuFlash2.addParam("allowScriptAccess", "always");
   	 	sohuFlash2.addVariable("clickthru",escape(flash.link));
		sohuFlash2.addVariable("firstTime",flash.firstTime);
    	sohuFlash2.write(flash.id);
		return this;
 }
  function loadFlash2 (flash) {
		 var sohuFlash2 = new sohuFlash(flash.src, flash.name, flash.width, flash.height,"7");
    	sohuFlash2.addParam("quality", "high");
    	sohuFlash2.addParam("wmode", "transparent");
   		sohuFlash2.addParam("allowScriptAccess", "always");
   	 	sohuFlash2.addVariable("clickthru",escape(flash.link));
    	sohuFlash2.write(flash.id);
		return this;
 }
 function init (opt) {//初始化
	 	small_flash = $.extend(small_flash, opt.small_flash);
		big_flash = $.extend(big_flash, opt.big_flash);
	 	$(".TurnAD260328").css({//配置容器DIV
				"position": "relative",
				"height": "328px"
		}).empty();
		$('<div id = "ad_bet_be"></div>').css({//小flash容器
			position: 'absolute',
			'z-index': 1000,
			'width': '260',
     		'height': '328',
    		left:0,
     		top: '0'						   
		}).appendTo(".TurnAD260328").hide();
		loadFlash(small_flash);
		$('<div id = "ad_bet"></div>').css({//大flash容器
			position: 'absolute',
			'z-index': 1000,
			'width': '520',
     		'height': '328',
    		left: '-260px',
     		top: '0'						   
		}).appendTo(".TurnAD260328").hide();
		loadFlash(big_flash);		
		sohuvd.load();//加载cookie
		sohuvd.vi = sohuvd.vi || 0;
		//control();
	return this;
 }
 function show () {//显示
	if(sohuvd.vi == 0) {
		$("#ad_bet").show();
		sohuvd.vi++;
	} else if(sohuvd.vi < 3) {
		$("#ad_bet").empty();
		big_flash.firstTime = undefined;
		loadFlash2(big_flash);	
		$("#ad_bet").show();
		sohuvd.vi++;
	} else {
		hide();	
	}
	sohuvd.store();
	 return this;
 }
 function hide() {//隐藏
	 //$("#ad_bet").hide().empty();	
	 $("#ad_bet").hide();
	  $("#ad_bet_be").show();
	 return this;
 }
 function control () {//控制
	 if(sohuvd.vi == 0) {
		show();	 
	} else {
		hide();	
	}
	 window.adTallest = {};//close flash
	adTallest.close = function() {
			hide();
	};
	adTallest.open = function() {
			show();
	};
	return this;
 }
 return {
	init: init ,
	control: control,
	hide: hide,
	show: show
 };
})(jQuery);
