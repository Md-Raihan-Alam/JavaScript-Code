let na=prompt('What is the name of picture of jpg types?');
var att=document.createElement('img');
att.src=`${na}.jpg`;//string template
att.width='50';
att.height='50';
att.setAttribute('id','NameofPIc');
document.querySelector('div').appendChild(att);