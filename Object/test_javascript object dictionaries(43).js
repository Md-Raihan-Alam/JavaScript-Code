//all possible work with objects
let bl={
	'buttons':{'b1':'.btn','b2':'.btn2'},
	'you':{'check2':'#box2','check':'.box','score':0},
	'cards':['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
	'cardsNum':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'K':10,'Q':10,'J':10},
'in':0,
'de':0,
'ON':true,
};
const CL=bl['you'];
const BL=bl['buttons'];
document.querySelector(BL['b1']).addEventListener('click',AlertOne);
document.querySelector(BL['b2']).addEventListener('click',AlertTwo);
function AlertOne(){
	if(bl['ON']==true){
		bl['in']++;
		bl['ON']=false;
		document.querySelector(CL['check2']).textContent="IN="+bl['in']+" DE="+bl['de'];
		document.querySelector(CL['check']).textContent='First button has been clicked';
	}
}
function AlertTwo(){
	if(bl['ON']==false){
		bl['de']++;
		bl['ON']=true;
		document.querySelector(CL['check']).textContent='Second button has been clicked';
		let numberNow=randomNumber();
		Score(numberNow);
			document.querySelector(CL['check2']).textContent="IN="+bl['in']+" DE="+bl['de'];
		document.querySelector('.scoreNEXT').textContent=CL['score'];
	}
}
function randomNumber(){
	let num=Math.floor(Math.random()*13);
	return bl['cards'][num];
}
function Score(Scoresss){
	if(Scoresss=='A'){
		if(CL['score']+bl['cardsNum'][Scoresss][1]<=50){
			CL['score']+=bl['cardsNum'][Scoresss][1];
		}
		else {
			CL['score']+=bl['cardsNum'][Scoresss][0];
		}
	}
	else{
		CL['score']+=bl['cardsNum'][Scoresss];
	}
}