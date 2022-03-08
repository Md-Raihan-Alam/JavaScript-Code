var width=43;
var height=54;
var length=10;
function setData(data1,data2,data3){
	var area=data1*data2;
	var volume=data1*data2*data3;
	return [area,volume];
}
document.write(setData(width,height,length)[1]);