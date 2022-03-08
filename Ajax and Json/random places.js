document.querySelector("button").addEventListener("click",()=>{
	var xhr=new XMLHttpRequest();
	xhr.open('GET','http://localhost/Json/JSON%20place.json');
	xhr.addEventListener("load",function(){
		if(xhr.status>=200 && xhr.status<400){
	var randomPlacesInfo=JSON.parse(xhr.responseText);
	console.log(randomPlacesInfo[0]);
	givingLocation(randomPlacesInfo);
		} else{
			alert("Failed to load");
		}
});
xhr.onerror=function(){
	console.log("Connection error");
};
	xhr.send();
});
function givingLocation(e){
	let htmlNewString="";
	for(var i=0;i<e.length;i++){
		htmlNewString+="<p>"+e[i].locat+" is at "+e[i].date+" that you might want to visit ";
	}
document.querySelector(".place").insertAdjacentHTML('beforeend',htmlNewString);
}