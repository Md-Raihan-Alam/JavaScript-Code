let array=[1,2,3,4,5,6];
for(let index1 in array){
    console.log(index1);//will work through all array index
}
for(let index2 of array){
    console.log(index2);//will work through all array data
}