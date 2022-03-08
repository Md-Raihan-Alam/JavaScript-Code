function newCity(city,country){
    const newData={city,country};
    console.log(newData);
}
newCity("Chittagong","Bangladesh");
function addressMaker(address){
    const {city,state}=address;
    const newAddress={
        city,
        state,
        country:'United States'
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}
addressMaker({city:'Austin',state:'Texas'});