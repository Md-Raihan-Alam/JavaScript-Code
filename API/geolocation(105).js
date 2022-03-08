var elMap=document.getElementById("loc");
var msg="Sorry, we were unable to get your location";
//if(Modernizr.geolocation){
	navigator.geolocation.getCurrentPosition(success,fail);
	elMap.textContent='Checking location...';
//} else{
	//elMap.textContent=msg;
//}
function success(position){
	msg="<h3>Logitude:<br>";
	msg+=position.coords.longitude+"</h3>";//Longitude in decimal degrees
	msg+="<h3>Latitude:<br>";
	msg+=position.coords.latitude+"</h3>";//Latitude in decimal degrees
	msg+="<h3>Accuracy:<br>";
	msg+=position.coords.accuracy+"m</h3>";//Accuracy of latitude and longitude in meters
	msg+="<h3>altitude:<br>";
	msg+=position.coords.altitude+"m</h3>";//Meters above sea level
	msg+="<h3>Altitude Accuracy:<br>";
	msg+=position.coords.altitudeAccuracy+"m</h3>";//Accuracy of altitude in meters
	msg+="<h3>Degrees clockwise from north:<br>";
	msg+=position.coords.heading+"</h3>";//Degrees clockwise from north
	msg+="<h3>Travering Speed:<br>";
	msg+=position.coords.speed+"</h3>";//Speed traveling in meters per second
	msg+="<h3>Time:<br>";
	msg+=position.coords.timestamp+"</h3>";//Time since created (formatted as Date object)
	elMap.innerHTML=msg;
}
function fail(msg){
	elMap.textContent=msg;
	console.log(msg.code);
}