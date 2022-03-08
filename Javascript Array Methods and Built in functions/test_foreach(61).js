const set=document.querySelector('main');
const doc=document.querySelectorAll('.btn');
doc.forEach(function(e){
	e.addEventListener('click',function(e){
		var sl=e.target.classList;
		if(sl.contains('btn-red')){
			set.style.backgroundColor='red';
		}
		else if(sl.contains('btn-green')){
			set.style.backgroundColor="green";
		}
		else if(sl.contains('btn-blue')){
			set.style.backgroundColor="blue";
		}
	});
});