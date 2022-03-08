function Hotel(name,room,booked){
	this.name=name;
	this.room=room;
	this.booked=booked;
	this.availableRooms=function(){
		return this.room-this.booked;
	}
}
var rigelHotel=new Hotel("Rigel Hotel",60,30);
var newazHotel=new Hotel("Newaz Hotel",20,10);
document.getElementById("r").addEventListener("click",()=>{
	document.getElementById("hotelName").textContent=rigelHotel.name;
	document.getElementById("hotelFreeRoom").textContent=rigelHotel.availableRooms();
});
document.getElementById("n").addEventListener("click",function(){
	document.getElementById("hotelName").textContent=newazHotel.name;
	document.getElementById("hotelFreeRoom").textContent=newazHotel.availableRooms();
});