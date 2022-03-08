//const->block but can not be reassign
//let->block but can be reassign
//var->function
function sayNumber(){
	for(let i=0;i<5;i++){
		console.log(i);
	}
}
sayNumber();
//new way of method
const data={
	name:'Raihan',
	//walk:function(){}=old method
	talk(){}//new method
};
console.log(data.name);
let newValue="name";
data[newValue.value]="Md. Raihan Alam";
console.log(data[newValue.value]);
//this
const person={
	name:"Raihan",
	walk(){
		console.log(this);//this return the reference the current object if it is inside a function/object
	}
};
person.walk();
const walk=person.walk;
walk();//in here this is returning global object which is window but shown (if)undefined for strict mode
//binding this
const walk2=person.walk.bind(person);//by walk we cann call the arguments from object person
walk2();
//arrow function
const square=function(number){//old way
	return number*number;
}
const sum=totalSum=>totalSum+totalSum;//new way,if there is only one arguments
console.log(sum(5));
const f1=()=> "Raihan";//if there is no parameters
console.log(f1());
const threeForSum=(totalSum1,totalSum2,totalSum3)=>totalSum1+totalSum2+totalSum3;//in case of multiple parameters
console.log(threeForSum(3,3,3));
//useful of arrow functions
const jobs=[
{id:1,isActive:true},
{id:2,isActive:true},
{id:3,isActive:false}
];
//const jobActive=jobs.filter(function(job){return job.isActive;}); old method
const jobActive=jobs.filter((job)=>job.isActive);//way of arrow function
console.log(jobActive);
//arrow function and this
const person2={
	talk(){
		setTimeout(()=>{
			console.log("this",this);
		},1000);
	}
};
person2.talk();
//array map and template literals
const colors=["red","gren","blue"];
const itemsList=colors.map((e)=>`<li>${e}</li>`);
console.log(itemsList);
//object destructuring
const address={street:'137B/C',city:'New York',Country:'US'};
const {street:st,city:place,Country:loc}=address;
console.log(st);
console.log(place);
console.log(loc);
//spread operator
const first=[1,2,3,5,6];
const second=[8,9,0,12];
const combined=['Zero',...first,'One',...second,'Two'];
console.log(combined);
const clone=[...first];//we can copy array
console.log(clone);
const ob1={name:"Raihan"};
const ob2={job:"Web developer"};
const combined2={...ob1,...ob2,age:19};
console.log(combined2);
const obClone={...ob1};
console.log(obClone);
//class
class Walkman{//the var first word must be uppercase
	constructor(name){
		this.name=name;
		console.log(name);
	}
	walk(){
		console.log("walk");
	}
}
const walkman=new Walkman("Raihan");
walkman.walk();
//inheritance
class Teacher extends Walkman{//extends inheritance
	constructor(name,title){
		super(name);//if the parent class have same constructor
		this.title=title;
		console.log(title);
	}
}
const defineTeacher=new Teacher("Raihan","King of technology");
defineTeacher.walk();
//modules
/*
import {Demo2} from './modules2';
const demo=new Demo2("Raihan","MSCE");
console.log(demo);
*/
//