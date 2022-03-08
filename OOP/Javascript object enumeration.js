var myObject={};
Object.defineProperty(myObject,"a",{
    enumerable:true,value:3
});
Object.defineProperty(myObject,"b",{
    enumerable:false,value:4
});
for(var k in myObject)
    console.log(k,myObject[k]);//b exist but not showing because of enumerable:false
/*properyIsEnumerable check the value of enumerable of propery*/
console.log(myObject.propertyIsEnumerable('a'));
console.log(myObject.propertyIsEnumerable('b'));
console.log(Object.keys(myObject));//check the keys of an object
console.log(Object.getOwnPropertyNames(myObject));//check the keys of an object regarldless enumerable's value