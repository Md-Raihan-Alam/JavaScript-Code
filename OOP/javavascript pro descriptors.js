var myObject={
    a:2
}
Object.getOwnPropertyDescriptor(myObject,"a");//write that in console
//this is the result you get
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }

/*TO DEFINE PROPERTY IN OBJECT*/
var myObject2={}
Object.defineProperty(myObject2,"a",{
    value:5,
    writable:true,
    configurable:true,
    enumerable:true
});
console.log(myObject2.a);
//writable is the control ability for you to change the value of a property
//configurable is the control ability for modifying of property,it orevent 'delete' property
//enumerable is the control ability of whether you should make a propery accessible in enumerations

/*TO PREVENT EXTENSIONS*/
var myObject3={
    a:4
}
Object.preventExtensions(myObject3);
Object.seal(myObject3);
/* not only can you not add any more properties, but you also cannot
reconfigure or delete any existing properties (though you can still
modify their values).
*/
Object.freeze(myObject3);
//same as seal but also make value unchangable
/*
IMPORTANT NOTE:
1.By combining writable:false and configurable:false, you can
essentially create a constant (cannot be changed, redefined, or deleted)
as an object property.
*/
