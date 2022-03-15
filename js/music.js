/* get the index of li  
	change background
	change player pic, text
	change the player button to stop, and title
	pic rotate
	play the songs
	
  */
 
 
 var index = 0;
 var li = $(".banner ul li");
 var img = $(".music .m_img img");
 var text=$(".music .m_text");
 var prev =$(".music .m_btn .m_prev");
var play =$(".music .m_btn .m_play");
var next =$(".music .m_btn .m_next");
var mp3 = $(".music .m_mp3");
var flag = false;  // the label for the play of the songs, true means onplaying
var close = true;  // player is displayed or hided


li.click(function(){
	
	//console.log(§(this).index());
	// get the li index of current click
	index = $(this).index();
	
	// play the songs
	show();
	
});

function show(){
	
	change_bg(index+1);
	change_img_txt(index+1);
	change_btn_title();
	img_rotate();
	play_mp3();
}

//change the background
function change_bg(idx){
	$("body").css({
		"background": "url(img/"+idx+"_bg.jpg) no-repeat",
		"background-size": "cover"
	});
	
}


function change_img_txt(idx){
	img.attr("scr", "img/" + idx +".jpg");
	
	text.html(li.eq(index).attr("title")); //get the title attribute of li and replace the text
}


function change_btn_title(){
	play.removeClass("m_play");
	play.addClass("m_pause");
	play.attr("title", "stop");
	
}

function img_rotate(){
	li.removeClass("img_rotate");
	li.eq(index).addClass("img_rotate");
}

function play_mp3(){
	mp3.attr("src", li.eq(index).attr("datasrc"));
	mp3.get(0).play();
	flag = true;
}


play.click(function(){
	
	
	
	if(flag){
		mp3.get(0).pause();
		li.eq(index).children().removeClass("img_rotate");
		play.removeClass("m_pause").addClass("m_play").attr("title", "play");
	} 
	else{
		mp3.get(0).play();
		li.eq(index).children().addClass("img_rotate");
		play.removeClass("m_play").addClass("m_pause").attr("title", "pause");
		change_bg(index+1);				
	}
	
});

prev.click(function(){
	
	index--;
	if(0>index){
		index=li.length -1;
	}
	show();
});


next.click(function(){
	
	index++;
	if(li.length-1<index){
		index=0;
	}
	show();
	
});

$(".m_close").click(function(){
	if(close){
		$(this).addClass("m_open");
		$(".music").animate({"left": "-520px"}, 800);
		close=false;
	}
	else{
		$(this).removeClass("m_open");
		$(".music").animate({"left": "-0px"}, 800);
		close = true;
	}
	
	
});