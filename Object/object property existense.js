var myObject={a:5};
console.log(("a" in myObject));//in=check whether does object have it
console.log(myObject.hasOwnProperty("a"));//hasOwnProperty same but will not construct prototype