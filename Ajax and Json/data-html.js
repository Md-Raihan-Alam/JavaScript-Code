var pageCounter=1;
//https://learnwebcode.github.io/json-example/animals-1.json
document.getElementById("info_box").addEventListener("click",function(){
var ourRequest=new XMLHttpRequest();//to download json
/*for sending
POST
for receving
*/
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
ourRequest.addEventListener("load",function(){
	//console.log(ourRequest.responseText);
	//var ourData=ourRequest.responseText;
	//console.log(ourData[0]);
	//ajax is created
	if(ourRequest.status>=200 && ourRequest.status<400){
	var ourData=JSON.parse(ourRequest.responseText);//ajax;Asynchronous JavaScript And XML
    //console.log(ourData[0]);
	enterHTMLdata(ourData);
	} else {
		console.log("We connected to the server but it returned error");
	}
});
ourRequest.onerror=function(){
	console.log("Connection error");
};
ourRequest.send();
pageCounter++;
if(pageCounter>3){
	document.getElementById("info_box").classList.add("hide-me");
}
});
function enterHTMLdata(e){
	var htmlString="";
	for(var i=0;i<e.length;i++){
		htmlString+="<p>"+e[i].name+" is a "+e[i].species+" that likes to eat ";
	 for(var j=0;j<e[i].foods.likes.length;j++){
		// htmlString+=e[i].foods.likes[j];
		if(j==0){
			htmlString+=e[i].foods.likes[j];
		}else{
			htmlString+=" and "+e[i].foods.likes[j];
		}
	 }
	 htmlString+=" and dislikes ";
	 for(var j=0;j<e[i].foods.dislikes.length;j++){
		// htmlString+=e[i].foods.likes[j];
		if(j==0){
			htmlString+=e[i].foods.dislikes[j];
		}else{
			htmlString+=" and "+e[i].foods.dislikes[j];
		}
	 }
	 htmlString+="</p>"
	}
	//document.querySelector("#insertingData").innerHTML=htmlString;
document.querySelector("#insertingData").insertAdjacentHTML('beforeend',htmlString);
	}