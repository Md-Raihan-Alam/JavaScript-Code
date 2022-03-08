//from text file
const getText=document.querySelector('#getText');
getText.addEventListener('click',showText);
function showText(){
    fetch('sample.txt')
    .then((res)=>{
        //console.log(res.text()); will show as promise
        return res.text();
    })
    .then((data)=>{document.querySelector('.output').innerHTML=data;})
    .catch((error)=>console.log(error));
}
//from josn file
const getUser=document.querySelector('#getUsers');
getUser.addEventListener('click',()=>{
    fetch('user.json')
    .then((res)=>res.json())
    .then((data)=>{
        let output='';
        data.forEach((element) => {
            output+=`<h3>Name:${element.name}</h3>
            <h4>Email:${element.email}</h4>
            <hr/>`;
        });
        document.querySelector('#outputUser').innerHTML=output;
    })
    .catch((error)=>console.log(error));
});
//from a site
const getPosts=document.querySelector('#getPosts');
getPosts.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>{
        let allUserInfo='';
        data.forEach((element)=>{
            allUserInfo+=`
            <h3>Name:${element.name}</h3>
            <h4>Username:${element.username}</h4>
            <h4>Email:${element.email}</h4>
            <h4>Address:${element.address.street},${element.address.suite},${element.address.city},${element.address.zipcode}</h4>
            <h4>Phone:${element.phone}</h4>
            <h4>Website:<a href="${element.website}">${element.website}</a></h4>
            <h4>Company:${element.company.name}</h4>
            `
        });
        document.querySelector('#outputPost').innerHTML=allUserInfo;
    })
    .catch((error)=>{console.log(error)});
});
//inputting form
document.getElementById('addPost').addEventListener('submit',(e)=>{
    e.preventDefault();
    let title=document.getElementById('title').value;
    let body=document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
            'Accept':'appication/json,text/plain,*/*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
});