const btn=document.querySelectorAll(".fil-btn");
btn.forEach(function(e){
 e.addEventListener('click',function(e){
	 if(e.target.dataset.id=="btn1"){
		 console.log(e.currentTarget.dataset.id);
		 alert("First Btn");
	 }
	 else 	 if(e.target.dataset.id=="btn2"){
		 console.log(e.currentTarget.dataset.id);
		 alert("Second Btn");
	 }
	 else 	 if(e.target.dataset.id=="btn3"){
		 console.log(e.currentTarget.dataset.id);
		 alert("Third Btn");
	 }
 });
});