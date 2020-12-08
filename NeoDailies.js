
$(document).on("click", "button", function (event){
	$("a").click().window.open(this.href);
});

// When clicked, opens link in new tab if link isn't crossed out
$("ul").on("click", "a", function(event){
	if(!$(this).parent().hasClass("completed")) {
	window.open(this.href,'_blank'); 
	return false; // this prevents link click from leaving app
	}
});

// Prevents link from firing on click if link is crossed out
$("ul").on("click", "li", function(event){
	if($(this).hasClass("completed")) {
		event.preventDefault();
	}
});

// Click on trash icon to cross out item from list
$("ul").on("click", "span", function(event){  
	event.stopPropagation(); // stops click event from also firing on li 
		$(this).parent().toggleClass("completed");
});

// Click on paw to toggle crossed off status
$(".fa-paw").click(function(){ 
	$("li").toggleClass("completed");
});

// 
$("div").mouseover(function(){
	$("img").addClass("visible animated slideInUp")
	.delay(900) // delay 900 ms
	.queue(function (finishedAnimation) { 
    $(this).css('zIndex',0); 
    finishedAnimation(); 
  });
});
