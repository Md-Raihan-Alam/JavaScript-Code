if(document.getElementById("btn").addEventListener){
	document.getElementById("btn").addEventListener("click",function(){
		alert("Activate");
	});
}
else{
	document.getElementById("btn").attachEvent("onclick",function(){
		alert("attachEvent");//for older version of IE
	});
}