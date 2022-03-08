let stacks={
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocklate","pleanuts"]
};
let is_shop_open=false;
function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log("Shop is closed"));
        }
    });
}
async function kitchen(){
    try{
        await time(2000);
        console.log(`${stacks.Fruits[0]}`);
        await time(0000);
        console.log('Start the production');
        await time(1000);
        console.log(`${stacks.liquid[0]} and ${stacks.liquid[1]} was added`);
        await time(1000);
        console.log('Machine has started');
        await time(2000);
        console.log(`${stacks.holder[0]} is used as a container`);
        await time(3000);
        console.log(`${stacks.toppings[0]} is used being toppings`);
        await time(2000);
        console.log(`Ice cream is served`);
    }
    catch(error){
        console.log("Customer left",error);
    }
    finally{
        console.log('Day ended,shop is closed');
    }
}
kitchen();