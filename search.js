var  data = [
    {id: 1, status: 'mentor', name:'Eshmat'},
    {id: 2, status: 'teacher', name:'Toshmat'},
    {id: 3, status: 'tester', name:'Tursun'},
    {id: 4, status: 'developer', name:'Gulbashakar'},
];


const search = (key,val)=>{
const searched = data.filter(value=>(
value[key].toLowerCase().includes(val.toLowerCase())
));
return searched;

}


console.log(search('name','Sh'));