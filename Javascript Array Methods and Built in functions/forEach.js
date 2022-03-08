const people = [
    {
    name: 'Casey ',
    rate: 60
    },
    {
    name: 'Camille',
    rate: 80
    },
    {
    name: ' Gordon',
    rate : 75
    },
    {
    name : 'Nigel',
    rate: 120
    }
];
let results=[];
people.forEach(function(person){/*forEach run throught every array index*/
if(person.rate>=65 && person.rate<=90){
    results.push(person);
}
});
console.log(results);
const num=[1,2,3,4,5];
num.forEach(function(item,index,arr){
    console.log('a['+index+']='+item);
});
const letter=['a','b','c','c','b','a','a','d'];
let output={};
letter.forEach(function(e){
    if(output[e]){
        output[e]++;
    }else{
        output[e]=1;
    }
});
console.log(output);