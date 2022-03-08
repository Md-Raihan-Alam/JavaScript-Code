let stacks={
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocklate","pleanuts"]
};
let is_shop_open=true;
let order=(time,work)=>{
    return new Promise( (resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log('Our shop is closed'));
        }
    } )
}
order(2000,()=>console.log(`${stacks.Fruits[3]} is selected`))
.then(()=>{return order(0000,()=>console.log('Production has start'))})
.then(()=>{return order(2000,()=>console.log('The fruit has been chopped'))})
.then(()=>{return order(1000,()=>console.log(`${stacks.liquid[0]} and ${stacks.liquid[1]} is added`))})
.then(()=>{return order(1000,()=>console.log(`The machine has started`))})
.then(()=>{return order(2000,()=>console.log(`Ice cream is put on ${stacks.holder[1]}`))})
.then(()=>{return order(3000,()=>console.log(`${stacks.toppings[1]} is being used for toppings`))})
.then(()=>{return order(1000,()=>console.log(`The ice cream has been served`))})
.catch(()=>{console.log('Customer left');})
.finally(()=>{console.log('Day end');});