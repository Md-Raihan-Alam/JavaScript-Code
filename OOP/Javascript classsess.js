class Rectangle{//the first letter must be capital
    //to setup object
    constructor(width,height,color){
        console.log("the rectangle is being created");
        //properties
        this.width=width;
        this.height=height;
        this.color=color;
    }
    //method
    getArea(){
        return this.width*this.height;
    }
    printDescription(){
        console.log(`I am a rectangle of ${this.width} * ${this.height} and i am ${this.color}`);
    }
}
let rectangle1=new Rectangle(3,5,"green");
console.log(rectangle1.getArea());
rectangle1.printDescription();