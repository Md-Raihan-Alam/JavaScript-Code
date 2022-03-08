var object={
	name:"Rigel Hotel",
	rooms:40,
	booked:25,
	freeRoom:function(){
    return this.rooms-this.booked;
	}
}
var roomsFree=object.freeRoom();
console.log(roomsFree);	