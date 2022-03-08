let stacks={
    Fruits:["Strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocklate","pleanuts"]
};
let order=(Fruit_name,call_prodcution)=>{
    setTimeout(()=>{
        console.log(`${stacks.Fruits[Fruit_name]} was selected`);
         call_prodcution();
    },2000);
}
let production=()=>{
   setTimeout(()=>{
       console.log(`Production has started`);
       setTimeout(()=>{
           console.log('The fruit has been chopped');
           setTimeout(()=>{
               console.log(`${stacks.liquid[0]} and ${stacks.liquid[1]} was added`);
                setTimeout(()=>{
                    console.log('The machine has started');
                    setTimeout(()=>{
                        console.log(`Ice cream is placed on ${stacks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`For toppings ${stacks.toppings[0]} is used`);
                            setTimeout(()=>{
                                console.log('Ice cream is served');
                            },2000);
                        },3000);
                    },2000);
                },1000);
            },1000);
       },2000);
   },0000);
}
order(0,production);