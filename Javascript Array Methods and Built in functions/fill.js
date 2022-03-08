//it fill the numbers you enter as arguments in selected array
let numbers=[1,2,3,4,5];
numbers.fill(0);
console.log(numbers);
let numbers2=[3,4,6,78,8,9];
numbers2.fill(0,1,3);//value,from,to
console.log(numbers2);
function fillInNumbers(n){
    return Array(n).fill(0).map(function(_,init){
        return init+1;
    });
}
console.log(fillInNumbers(10));