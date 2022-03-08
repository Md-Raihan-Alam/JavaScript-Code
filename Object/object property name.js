let prefix="foo";
let myObject={[prefix+'bar']:'hello',[prefix+'baz']:'World'};
console.log(myObject["foobar"]);
console.log(myObject["foobaz"]);