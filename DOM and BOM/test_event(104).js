function checkLength(e,minLength){
	var el,elMsg;
	if(!e){
		e=window.event;
	}
	el=e.target||e.srcElement;
	elMsg=el.nextSibling;
	if(el.value.length<minLength){
		elMsg.textContent="Username must be at least "+minLength+" characters";
	} else{
		elMsg.textContent="Accepted";
	}
}
var elUserName=document.getElementById("username");
if(elUserName.addEventListener){
	elUserName.addEventListener('blur',function(e){
		checkLength(e,5);
	});
}else{
	elUserName.attachEvent("onblur",function(e){
		checkLength(e,5);
	});
}