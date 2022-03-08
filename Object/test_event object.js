$(document).ready(function(){
	$("ul").on("click",function(e){
		console.log(e.type);//type of event
        console.log(e.data);//
		console.log(e.target);//DOM element that initiated the event
	});
	$("html").on("click",function(e){
		console.log(e.pageX);//Mouse position from left edge of viewport
	    console.log(e.pageY);//Mouse position from top of viewport
	    console.log(e.timeStamp);
		/*
		Number of milliseconds from Jan 1st, 1970,
        to when the event was triggered (this is known
        as Unix Time). Does not work in Firefox.
		*/
	});
	$("#in").on("keypress",function(e){
		console.log(e.which);//button or key that was pressed
	    console.log(e.data);//
		//console.log(e.preventDefault());
		//console.log(e.stopPropagation());=Stops the event bubbling up to ancestors
	});
});