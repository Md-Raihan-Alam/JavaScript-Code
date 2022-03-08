function timenow(){
let d=new Date();
	document.querySelector('.time').textContent=(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}
setInterval(timenow,1000);