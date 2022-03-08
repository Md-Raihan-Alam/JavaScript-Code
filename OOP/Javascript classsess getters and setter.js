class Square{
    constructor(width){
        this.width=width;
        this.height=width;
        this.numOfReq=0;
    }
    get area(){
        this.numOfReq++;
        return this.width*this.height;
    }
    set area(area){
        this.width=Math.sqrt(area);
        this.height=this.width;
    }
}
let square1=new Square(5);
square1.area=25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.numOfReq);
