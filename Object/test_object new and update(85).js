var hotel=new Object();//create a blank object
hotel.name="Rigel Hotel";
hotel.room=45;
hotel.roomBooked=12;
hotel.availableRooms=function(){
	return this.room-this.roomBooked;
};
hotel.name="Newaz Hotel";
document.getElementById("hotelName").textContent=hotel.name;
document.getElementById("hotelFreeRoom").textContent=hotel.availableRooms();