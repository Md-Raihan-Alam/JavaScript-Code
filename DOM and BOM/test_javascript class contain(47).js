document.querySelector('button').addEventListener('click',checkclass);
function checkclass(){
	if(document.querySelector('.checking').classList.contains('classNow')){
		alert('class is present');
	}
}