const sound=new Audio('cash.mp3');
document.getElementById('btn').addEventListener('click',makeSound);
function makeSound(){
	sound.play();
}