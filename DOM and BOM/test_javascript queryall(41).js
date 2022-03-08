document.querySelector('#btn').addEventListener('click',removeClass);
function removeClass(){
	let allNow=document.querySelector('div').querySelectorAll('p');
	for(let i=0;i<allNow.length;i++)
		allNow[i].remove();
}