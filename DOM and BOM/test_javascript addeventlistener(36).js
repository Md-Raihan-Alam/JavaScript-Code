document.querySelector('.btn').addEventListener('click',alertNow);
function alertNow(){
	alert("Method=1");
}
document.querySelector('.btn2').addEventListener('click',function(){
	alert('Method=2');
});
document.querySelector('.btn2').addEventListener('click',()=>{
	alert('Method=3');
});
/*onclick=click
onmouseover=mouseover
onchange=change
onkeydown=keydown
ondblclick=dbclick
onmousedown=mousedown
onmouseup=mouseup
onmouseenter=mouseenter;only the selected element,will not select the child event
onmouseleave=mouseleave;only the selected element,will not select the child event
onmouseover=mouseover;all the element;selected parent and child
onmouseout=mouseout;all the element;selected parent and child
onmousemove=mousemove;inside the selected element;whenever the mouse move
onkeydown=keydown
onkeyup=keyup
onkeypress=keypress
onfocus=focus;when an element is focus by mouse
onblur=blur;when an element is unselected by mouse
oncut=cut;
onpaste=paste;
oninput=input;anything you do in 'input'
onsubmit=submit;
onunload=unload;Web page is unloading
onerror=error;Browser encounter a JavaScript error or an asset doesn't exist
onresize=resize;Browser window has been resized
onscroll=scroll;User has scrolled up or down the page
oninput=input;value has changed or data has been submitted
onreset=reset;User click on a form's reset button
onselect=select;User selects some text in a form field
DOMSubtreeModified;CHange has been made to document
DOMNodeInserted;Node has been inserted as a direct child of another node
DOMNodeRemoved;Node has been removed from another node
DOMNodeInsertedIntoDocument;Node has been inserted as a descendant of another node
DOMENodeRemovedFromDocument;Node has been removed as a descendant of another node
hashchange;URL hash changed
beforeunload;When the website is going to be unloaded
*/