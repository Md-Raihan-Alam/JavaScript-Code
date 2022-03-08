function add(...nums){
    let total=nums.reduce((x,y)=>x+y);//arrow function
    console.log(total);
}
add(4,5,8,9,12,54);