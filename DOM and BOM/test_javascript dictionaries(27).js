function ln(){
	var lnName=prompt("What is the language name?");
	var ooP=prompt("What Info do you want?");
	var result=database(lnName,ooP);
	console.log(result);
}
function database(lnName,ooP){
	var newDatabase={
	'c':{'OOP':'none','Generation':'1st'},
	'c++':{'OOP':'none','Generation':'2nd'},
	'Phyton':{'OOP':'none','Generation':'5th'},
};
var newdata=newDatabase[lnName][ooP];
return [newdata];
}
