document.addEventListener("DOMContentLoaded",function(){
	//(object,title,url);
	//history.pushState(null,"title","pretend.html");
    // history.replaceState(null,"title","pretend.html");
    window.addEventListener("hashchange",(e)=>{
		show("hashchanged");
	});
	window.addEventListener("popstate",(e)=>{
		show("popstate");
	document.querySelector("#link").addEventListener("click",(e)=>{
		e.preventDefault();
		let href=e.currentTarget.href;
		let poi=e.currentTarget.getAttribute("data-person");
		show(href);
		history.replaceState({"userLikeness":poi},"title",href);
		loadPerson();
	});
	});
	});
function loadPerson(){
	show('loadPerson');
	let hs=JSON.stringify(history.state);
	let data=JSON.parse(hs);
	console.log(data.userLikeness);
	show(data.userLikeness);
}
function show(output){
	let p=document.createElement("p");
	p.textContent=output;
	document.getElementById("output").appendChild(p);
	setTimeout(_=>{
		document.getElementById("output").removeChild(p);
	},4000);
}