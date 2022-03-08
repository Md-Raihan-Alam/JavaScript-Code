var age=prompt("What is your age?");//let doesn't work with prompt
if((age>18) && (age<=25)) {
	status="My guest";
console.log(status);
}
else if(age<=18){
	status="My nephew";
	console.log(status);
}
else {
	status="Don't know that person";
	console.log(status);
}
switch(3){
	case 1:
	text="Saturday";
	break;
	case 2:
	text="Sunday";
	break;
	case 3:
	text="Monday";
	break;
	case 4: 
		text="Tuesday";
	break;
	case 5:
 	text="Wednesday";
	break;
	case 6:
	text="Thursday";
	break;
	case 7: 
	text="Friday";
break;
 default:
 text="Not a day's number";
 break;
 }
 console.log(text);