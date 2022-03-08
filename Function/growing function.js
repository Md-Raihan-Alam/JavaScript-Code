function zeroPad(number,width){
    let string=String(number);
    while(string.length<width){
        string="0"+string;
    }
    return string;
}
function printFarmInventory(cows,chicken,pig){
    console.log(`${zeroPad(cows,3)} Cows`);
    console.log(`${zeroPad(chicken,3)} Chicken`);
    console.log(`${zeroPad(pig,3)} Pigs`);
}
printFarmInventory(7,16,3);