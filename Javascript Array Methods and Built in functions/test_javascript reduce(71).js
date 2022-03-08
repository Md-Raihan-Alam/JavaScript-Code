const num=[1,-5,3,11];
let val=num.reduce((accumulator,currentValue)=>{
	return accumulator+currentValue;
},0);
console.log(val);//10
const colors=['red','blue','green','white','red','pink','black','green'];
let val2=colors.reduce((accumulator,currentValue)=>{
	for(let i=0;i<colors.length;i++){
	if(!accumulator.includes(colors[i]))
		accumulator.push(colors[i]);
	}
	return accumulator;
},['colors']);
console.log(val2);
const menu=[
{
	id:1,
	title:"Death Flag",
	category:"isekai novel",
	desc:"A hero in the form of twisted and arrogant villain",
},
{
	id:2,
	title:"Strange grief",
	category:"misundersanding novel",
	desc:"An idiot and weakling adventurer consider to be strongest and cunning creature alive of the world",
},
{
	id:3,
	title:"A misunderstood strongest  mentor",
	category:"misundersanding novel",
	desc:"A kickout weak adventurer consider to be strongest creature alive",
},
{
	id:4,
	title:"A Certain Scientific Acceletor",
	category:"Anti-hero novel",
	desc:"A villain fulfiting the responsibility of hero",
},
{
	id:5,
	title:"The monster tamer",
	category:"isekai novel",
	desc:"A hero is musunderstood to be a demon lord",
},
];
const allNovel=menu.reduce(function(name,check){
	if(!name.includes(check.category)){
		name.push(check.category);
	}
	return name;
},['all']);
console.log(allNovel);