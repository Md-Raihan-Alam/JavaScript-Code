/*in simple way*/
var menu=[
{
	id:1,
	name:"Death flag",
	desc:"A hero in the form of twisted and arrogant villain",
},
{
	id:2,
	name:"Strange grief",
	desc:"A weakling and idiot is considered to be strongest and smartest creature alive",
},
];
menu.filter(function(e){
	console.log(e);
		console.log(e.name);
		console.log(e.id);
});
/*in another way of explanation*/
let ar=new Array(-1,5,9,-34,6,4,8,undefined);
function even(e){
	return (e%2==0);//true than keep and false than kick out
}
var ar2=ar.filter(even);//put the ar array in filter with argument of even
console.log(ar2);
var ar3=ar.filter(x=>x%2!=0);//filter take every value of ar as x and than check whether are they even or not
console.log(ar3);
/*in another way of explanation*/
let s="I would like to have the    death flag as anime";
let words=s.split(" ").filter(word=>word.length>3);
console.log(words);