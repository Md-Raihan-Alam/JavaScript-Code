let people=[
    {
        name: 'Casey',
        rate: 60
    },
        {
        name: 'Camille',
        rate: 80
        },
        {
        name:'Gordon',
        rate : 75
        },
        {
        name : 'Nigel',
        rate: 120
        }
];
let inputTable=document.querySelector('.freelancerData');
for(let i=0;i<people.length;i++){
    inputTable.innerHTML+='<tr><td>'+people[i].name+'</td><td>'+people[i].rate+'</td></tr>';
}