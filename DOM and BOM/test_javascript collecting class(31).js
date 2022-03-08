function fall(){
	var cl=document.getElementsByTagName('div');
	var ar=[];
	for(let i=0;i<cl.length;i++){
		ar.push(cl[i].classList[1]);
		//classList for  class,multiple class is same as 1-D array
	}
		console.log(ar);
}