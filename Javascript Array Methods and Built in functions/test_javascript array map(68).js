const menu=[
{
	id:1,
	title:"Death flag",
	desc:"A villain fulfiting the duty of a hero",
},
{
	id:2,
	title:"Strange grief",
	desc:"A weakling and idiot boy is considered to be the strongest and smartest creature alive"
},
];
window.addEventListener("DOMContentLoaded",()=>{
	let data=menu.map(function(e){
		console.log(e);
		return e.title;
	});
	document.querySelector("div").innerHTML=data;
});