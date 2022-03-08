class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log('Generic Animal Sound');
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){//polymorphism=overriding
        super.makeSound();
        console.log('Woof');
    }
}
const a1=new Animal('Dog');
const s2=new Dog('Dof');
a1.makeSound();
s2.makeSound();//it check first which class has been inherited