/*The reduce function combines all the elements in the array into one value using a
passed transformation function parameter
check test_javscript reduce.js*/
const arr=[1,2,13,4,5];
const data=arr.reduce(function(acc,init){
    return acc+init;
},0);
console.log(data);
const max=arr.reduce(function(acc,init){
    if(acc>init){
        return acc;
    }else{
        return init;
    }
});
console.log(max);
const techData=[
    {
        name:'Laptop',
        price:1000,
        rate:8
    },
    {
        name:'Dekstop',
        price:1300,
        rate:9
    },
    {
        name:'Super computer',
        price:10000,
        rate:10
    }
];
const totalPrice=techData.reduce(function(acc,init){
    return acc+(init.price*init.rate);
},0);
console.log(totalPrice);