var myArray=[1,2,3,4,5];
var it=myArray[Symbol.iterator]();
for(var k in myArray)
    console.log(it.next());
var myObject={a:3,b:4}
Object.defineProperty( myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
    next: function() {
        return {
            value: o[ks[idx++]],
            done: (idx > ks.length)
            };
            }
            };
            }
            } );
// iterate `myObject` manually
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }
// iterate `myObject` with `for..of`
for (var v of myObject) {
console.log( v );
}
// 2
// 3