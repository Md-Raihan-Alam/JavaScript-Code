var ob={first:"Raihan",last:"Alam",age:18,studentInfo:function(){
	return this.first+" "+this.last+" "+this.age;//this indicate the var inside of object in case there is another var outside
}};
console.log(ob);
console.log(ob.last);
ob.first="Mystogun";//change
console.log(ob.first);
ob.age++;
console.log(ob.age);
console.log(ob.studentInfo());