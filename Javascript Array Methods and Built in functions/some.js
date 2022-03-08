//'some' check if there is anything in array that fulfil the condition,like filter but not same
//answer is true or false
const numbers=[1,2,3,4,5,6];
const res=numbers.some(function(e){
    return e>4;
});
console.log(res);
const persons=[
    {
        name:'Raihan',
        age:20
    },
    {
        name:'Rimon',
        age:21
    },
    {
        name:'Roki',
        age:16
    }
];
const res2=persons.some(function(e){
    return e.age>=18;
});
console.log(res2);