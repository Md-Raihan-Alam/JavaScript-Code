const apUrl='https://fcctop100.herokuapp.com/api/fccuser/top/alltime';
/*function getCall(){
    fetch(apUrl).then((r)=>r.json()).then((json)=>{
        console.log(json[0]);
    }).catch((err)=>{
        console.log('failed');
    });
}*/
async function getCall(){
    const respons=await fetch(apUrl);
    const json=await response.json();
    console.log(json[0]);
}
getCall();