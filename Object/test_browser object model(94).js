var msg='<h2>bowser window<h2><p>Width:'+window.innerWidth+'</p>';
msg+='<p>Height'+window.innerHeight+'</p>';
msg+='<h2>History</h2><p>Items:'+window.history.length+'</p>';
msg+='<h2>Screen</h2><p>Width:'+window.screenX+'</p>';
msg+='<p>Height:'+window.screenY+'</p>';
var el=document.getElementById("info");
el.innerHTML=msg;
alert('Current page:'+window.location);