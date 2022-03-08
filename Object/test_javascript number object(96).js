var originalNumber=10.434234;
var bigNumber=3124153456267546756746456;
var msg='<h2>Original number:'+originalNumber+'</h2>';
msg+='<h2>3 decimal places</h2><p>'+originalNumber.toFixed(3)+'</p>';
msg+='<h2>3 digits:</h2><p>'+originalNumber.toPrecision(3)+'</p>';
msg+='<h2>Scientifix notation:</h2><p>'+bigNumber.toExponential(3)+'</p>';
var el=document.getElementById('info');
el.innerHTML=msg;