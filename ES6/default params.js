function add(numArray=[2,3,5,8,34]){//default params
    let total=0;
    numArray.forEach((element) => {
        total=+element;
    });
    console.log(total);
}
add()