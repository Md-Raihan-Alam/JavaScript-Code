let prog=['C','C++','C#','Java'];
let fruits=new Array('apple','banana','Orange');
console.log(prog[2]);
console.log(fruits[0]);
fruits[0]="Jackfruit";
console.log(fruits[0]);
for(let i=0;i<prog.length;i++) console.log(prog[i]);
//array common methods,console can take multiple arguments
console.log('Language=',prog.toString());//turn them into string
console.log(fruits.join(" * "));//add thing betweeen
console.log(fruits.pop(),fruits);//remove last item
console.log(prog.push("JavaScript"),prog);//appends
prog.shift();//remove the first item
console.log(prog);
prog.unshift('Objective C');//add first item
console.log(prog);
let vegetables=['asparagus','tomato','brocoli'];
var allGro=fruits.concat(vegetables);
console.log(allGro);//concat combine array
console.log(allGro.splice(1,3));
console.log(allGro.reverse());
let alp=['t','b','f','h','u','o','p','q','w','e','y'];
console.log(alp.sort());
let numbers=[4,76,1,564,978,312,765,132,809,23,67,0];
console.log(numbers.sort(function(a,b){return a-b}));//ascending
console.log(numbers.sort(function(a,b){return b-a}));//descending
let emptyArray=[];
for(var i=0;i<=10;i++) emptyArray.push(i);
console.log(emptyArray);