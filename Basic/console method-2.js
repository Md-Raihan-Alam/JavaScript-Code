let cityData={
    "London":{
        "Tel":'0193283231',
        "Country":'UK'
    },
    "Sydney":{
        "Tel":'0193283231',
        "Country":'UK'
    },
    "NewYork":{
        "Tel":'0193283231',
        "Country":'UK'
    },
}
let num=123;
if(num<2000){
    debugger;//if you want to check anyting
}
console.table(cityData);
console.log(cityData.London.Tel);
let userAge=document.getElementById("num");
let inputButton=document.getElementById("submit");
inputButton.addEventListener("submit",function(e){
    e.preventDefault();
    console.assert(userAge.value<10,"User is not allowed");//if the value turn out to be false
});