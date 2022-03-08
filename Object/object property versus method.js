function foo(){
    console.log("FOO");
}
var fo=foo;
var myObj={
    fo:foo
};
foo();
console.log(fo);
console.log(myObj.fo);