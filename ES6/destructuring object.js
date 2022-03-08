let personInformation={
    firstName:"Md. Raihan",
    lastName:" Alam",
    age:20,
    hobbies:"reading books,playing video games"
};
//now object properties can be called like this
//const {firstName,lastName}=personInformation;
//console.log(`${firstName} ${lastName}`);
//we can rename them also
const {firstName:fn,lastName:ln}=personInformation;
console.log(`${fn} ${ln}`);