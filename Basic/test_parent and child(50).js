let val=document.querySelector('#listItems');
console.log(val.parentNode);//select the parent element
console.log(val.parentNode.parentNode.parentNode);//the more the ancestor
console.log(val.parentElement.parentElement);//parentElement is same as parentNode
console.log(val.childNodes);//including white space
console.log(val.children);//only element
console.log(val.firstChild);//including white space;
console.log(val.firstElementChild);//the element
//same as firstChild and firstElementChild
console.log(val.lastChild);
console.log(val.lastElementChild);