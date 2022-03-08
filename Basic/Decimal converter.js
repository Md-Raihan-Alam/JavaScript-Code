let input=prompt("Put in a number in decimal:");
console.log("Converters :");
console.log("Decimal    :",input);
//From any to Decimal
// console.log("Binary     :",Number.parseInt(input,2));
// console.log("Octal      :",Number.parseInt(input,8));
// console.log("Hexa       :",Number.parseInt(input,16));
//From any other:
console.log(input,"in decimal to binary:",Number(input).toString(2));
console.log(input,"in decimal to octal:",Number(input).toString(8));
let hexa=String(Number(input).toString(16));
console.log(input,"in decimal to hexa:",hexa.toUpperCase());