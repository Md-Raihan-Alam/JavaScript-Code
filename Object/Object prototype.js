function sayName(n){
    this.name=n;
}
let ex=new sayName("Raihan");
sayName.prototype.age="33";
sayName.prototype.sayCall=function(){
    console.log(`Hello I am ${this.name}`);
}
console.log(ex.age);
ex.sayCall();