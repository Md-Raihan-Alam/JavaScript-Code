function removeTwoAbility(){
    document.getElementById('two').removeEventListener('click',alertMe);
}
function alertMe(){
    alert("I am now working");
}
document.getElementById('one').addEventListener('click',removeTwoAbility);
document.getElementById('two').addEventListener('click',alertMe);