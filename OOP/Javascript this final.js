'use strict'
/*'this' in global scope*/
//house
this.table="window table";//indicating window
console.log(window.table);//a normal 'this'
this.garage={
    table:'garage window'
};
console.log(this.garage.table);
/*'this' in object(private)*/
let jhonRoom={
    table:'Jhons table'
};
//console.log(this.jhonRoom);=error because this cannot access private property
console.log(jhonRoom.table);
/*'this' in method*/
let myRoom={
    table:'My table',
    cleanTable(){//method
        console.log(`cleaning ${this.table}`);//here 'this' indicate myRoom
    }
}
myRoom.cleanTable();
/*'this' in function and call function*/
const homeTable=function(soap){
    console.log(`Cleaning ${this.table} by ${soap}`);//in strick mode it should not know what 'this' is indicating here
}
homeTable.call(this,'some soap');
homeTable.call(this.garage,'special soap');
homeTable.call(jhonRoom,'simple soap');
/*'this' inside an inner function*/
function cleanTable2(soap){
    let that=this;//=Option A
    function innerFunction(soap){
        console.log(`cleaning the only ${that.table} with only ${soap}`);
    }
    innerFunction(soap);
    //innerFunction.call(this,soap);=Option B
    //innerFunction.bind(this)(soap);=Option C
}
cleanTable2.call(this,'some shampoo');
/*'this' in constructor*/
function createRoom(name){
    this.table=`${name}'s room`;
}
const jillsRoom=new createRoom('jill');
const johnsRoom=new createRoom('john');
console.log(jillsRoom);
console.log(johnsRoom);
createRoom.prototype.cleaTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
}
jillsRoom.cleanTable('some a');
johnsRoom.cleaTable('some b');