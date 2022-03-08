function adding(){
	let aDiv=['newClass','newClass2','newClass3','newClass4'];
	let aNow=document.getElementsByTagName('div');
	for(let i=0;i<aNow.length;i++)
		aNow[i].classList.add(aDiv[i]);
}