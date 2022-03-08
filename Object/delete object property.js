let foo={
    test1:"hello"
}
function propertyOne(prop1){
    console.log(prop1);
}
delete foo.test1;
propertyOne(foo.test1);