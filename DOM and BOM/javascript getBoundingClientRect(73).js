/*Element.getBoundingClientRect() method return the size of an element
and its position relative to the viewport
only returning the DOMrect values
*/
console.log(document.querySelector(".box").getBoundingClientRect());
console.log(document.querySelector(".box").getBoundingClientRect().height);
console.log(document.querySelector(".box").getBoundingClientRect().x);