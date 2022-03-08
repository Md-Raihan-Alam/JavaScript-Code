document.querySelector('form').addEventListener('submit',(e)=>{
	e.preventDefault();//it prevent the submit or click or next action
	/*
	this code is also same
	e.returnValue=false;
	*/
	console.log(e.type);
});