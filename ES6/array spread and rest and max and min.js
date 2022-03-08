/*use of spread elements*/
//let add elements where we want
console.log('spread')
let certsAdd=['B','C'];
let letters=['A',...certsAdd,'D','E'];
console.log(letters); 
//pass elements of an array to a function
function addThreeNumbers(a,b,c){
    return a+b+c;
}
let num=[1,2,3,4];
console.log(addThreeNumbers(...num));//will ignore the fourth element and dont't have to type multiple times
//copy arrays
let arr1=['a','b','c'];
let arr2=[...arr1];
arr2.push('d');
console.log(arr2);
//concatenate arays
let arra=[132,432,654];
let arra2=[756,978,234];
arra=[...arra,'FreeCoding',...arra2];//more flexible than concat
console.log(arra);
/*use of rest*/
console.log('rest');
function multiply(multiplier,...theArgs){
    return theArgs.map(function(element){
        return multiplier*element;
    });
}
let arr=multiply(2,1,2,3);
console.log(arr);
/*max*/
console.log('Math max:')
console.log(Math.max(13,35,41));
console.log(Math.max(...num));//use spread element
/*min*/
console.log('Math min:')
console.log(Math.min(13,35,41));
console.log(Math.min(...num));//use min element