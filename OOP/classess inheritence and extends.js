class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }
}
class Programmer extends Person{//inheritence and extends
    constructor(name,age,yearsOfExperince){
        super(name,age)//super=call parents contructor
            //custom behaviour
            this.yearsOfExperince=yearsOfExperince;
    }
    code(){
        console.log(`${this.name} is coding`);
    }
}
let person1=new Person('Jeff',45);
let programmers1=new Programmer('Raihan',23,12);
console.log(person1);
console.log(programmers1);
programmers1.code();
programmers1.describe();
const progammers=[
    new Programmer('A',32,12),
    new Programmer('B',65,23)
];
function developSoftware(progammers){
    for(let pro of progammers){
        pro.code();
        pro.describe();
    }
}
developSoftware(progammers);