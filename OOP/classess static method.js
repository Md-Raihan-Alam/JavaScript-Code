class Square{
    constructor(width){
        this.width=width;
        this.height=width;
    }
    static equals(a,b){//static method
        return a.width*a.height===b.width*b.height;
    }
    static isValid(width,height){
        return width===height;
    }
}
let square1=new Square(8);
console.log(square1);
let square2=new Square(8);
console.log(Square.equals(square1,square2));//how static method is called
console.log(Square.isValid(6,6));