function alertUser(){
   alert('HELLO'); 
}
let timer;
document.querySelector('#btn').addEventListener('click',()=>{
    timer=setInterval(alertUser,2000);
});
document.querySelector("#btn2").addEventListener('click',()=>{
    clearInterval(timer,10000);
});