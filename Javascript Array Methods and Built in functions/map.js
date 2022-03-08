/*The map function applies passed function transformation to every element in the array
and returns a new array with those transformations applied.*/
let array=[1,2,3,4,5];
let MAP=array.map(function(item){
    return item*10;
});
console.log(MAP);
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
const techDataNewPrice=techData.map(function(item){
    return item.price*item.rate;
});
console.log(techDataNewPrice);
const techDataNewObject=techData.map(function(item){
    return {name:item.name,value:item.price*item.rate};
});
console.log(techDataNewObject);
document.querySelector('.techData').innerHTML=techData.map(function(item){
    return `<li>Name:${item.name}</li><li>Price is ${item.price}</li><li>Rate is ${item.rate} out of 10</li>`;
});