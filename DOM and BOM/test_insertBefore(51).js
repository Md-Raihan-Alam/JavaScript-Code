var doc=document.createElement('h1');
doc.className="logoName";
doc.id="logo";
doc.setAttribute('title','logodesign');
var docTExt=document.createTextNode("Hello");
doc.appendChild(docTExt);
var co=document.querySelector('span');
var co2=document.querySelector('h2');
co.insertBefore(doc,co2);//"in which element".insertBefore('the element','before this element')