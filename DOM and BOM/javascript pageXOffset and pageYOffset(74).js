/*
pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.
pageXOffset is a read-only window property that returns the number of pixels the document has been scrolled horizantally.
*/
window.addEventListener("scroll",function(){
	console.log(window.pageYOffset);
	console.log(window.pageXOffset);
});