function addNow(){
document.getElementsByTagName('p')[0].classList.add('new-class');
}
function add2(){
	let all_div=document.getElementsByTagName('div');
	for(let i=0;i<all_div.length;i++)
		all_div[i].classList.add('newClass'+i);
	//add_div[i].className('newClass'+i); also another method
}