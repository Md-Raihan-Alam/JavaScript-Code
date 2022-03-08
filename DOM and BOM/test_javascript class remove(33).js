function rem(){
	document.getElementsByTagName('p')[0].classList.remove('noew');
}
function rem2(){
	var j=document.getElementsByTagName('div');
	for(let i=0;i<j.length;i++)
		j[i].classList.remove(j[i].classList[0]);
}