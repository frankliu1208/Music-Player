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
var close = true;  // player in the music section is displayed or hided, true means display 



li.click(function(){
	
	// get the li index of current click,  when clicking one picture, get the index, re-assign to the index variable in L10
	index = $(this).index();
	// play the songs
	show();	
});



function show(){
	// index start from 0,  picture name starts from 1
	change_bg(index+1);
	change_img_txt(index+1);
	change_btn_title();
	img_rotate();
	play_mp3();
}

//change the background when clicking different song pic
function change_bg(idx){
	$("body").css({
		"background": "url(img/"+idx+"_bg.jpg) no-repeat",
		"background-size": "cover"
	});
	
}

// change the picture of the music section at the bottom left by img.attr
// the parameter comes from function show(),  set the src
function change_img_txt(idx){
	img.attr("src", "img/" + idx +".jpg");  // chnage the pic in the music section at left bottom
	
	text.html(li.eq(index).attr("title")); //get the title attribute of li and then replace the text, eq() is to find the related "li" according to index
}



// change the play/pause button
function change_btn_title(){
	play.removeClass("m_play");   //  remove the original class
	play.addClass("m_pause");     // add new class property
	play.attr("title", "stop");   // change the attribute of "title",  set to "stop"  when the mouse is hovering on the icon the play/pause button,  a title will be shown as "stop"
	
}


// rotate the picture
function img_rotate(){
	li.children().removeClass("img_rotate");  // remove the class attribute in html, ensure that all the pics are not rotated 
	li.eq(index).children().addClass("img_rotate");  // add the attribute to one pic which is clicked 
}


/*  play the music  */
function play_mp3(){
	mp3.attr("src", li.eq(index).attr("datasrc"));  // assign properties to audio src 
	mp3.get(0).play();  // play the songs
	flag = true;     // modify the flag of  playing music, true means the song is playing
}


/*  play or pause the songs  */
play.click(function(){
	
	if(flag){
		mp3.get(0).pause();  // pause the playing songs
		li.eq(index).children().removeClass("img_rotate");  // remove the rotate of the pic
		play.removeClass("m_pause").addClass("m_play").attr("title", "play");  // change the pause button to play button,  change the title to "play"
		flag = false;
	} 
	else{
		mp3.get(0).play();
		li.eq(index).children().addClass("img_rotate");
		play.removeClass("m_play").addClass("m_pause").attr("title", "pause"); 
		flag=true;    
		change_bg(index+1);				
	}
});



// play the previous song 
prev.click(function(){
	
	index--;
	if(0>index){
		index=li.length -1;    // when it comes to the first song, then go back to the last song
	}
	show();
});


// play the next song
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
		$(".music").animate({"left": "-520px"}, 800);  // hide the music section, go to the left
		close=false;  // false means that music section is hided now
	}
	else{
		$(this).removeClass("m_open");
		$(".music").animate({"left": "0px"}, 800);
		close = true;  //  music section is displayed
	}
	
	
});