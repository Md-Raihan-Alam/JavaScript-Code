function work(){
	var att=document.createElement('b');//create element or html tags
	var textAnswer=document.createTextNode('This is work of attribute,element,text,append');//create text
	att.setAttribute('id','workOfFunction');//adding attribute in the tags
	att.appendChild(textAnswer);//connecting text with element or tags;string is not needed
	document.getElementById('work2').appendChild(att);//connection the element of html with js;string is not needed
}