try{
    console.log("Start of try runs");

    console.log("End of try runs-never reached");
} catch(e){
   // console.log("Error has occured:"+e);
   console.log("Error has occured:"+e.stack);
} finally{
    console.log(" it will always run");
}
console.log("..then the execution continues");
let json='{"age":30}';
try{
    let user=JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data:no name");
    }
    console.log(user.name);
} catch(e){
    console.log("Json error:"+e);
}