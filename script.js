console.log('Hello! ');

let x =document.getElementById("main");
console.log(x)
fetch('./data.json')
  .then((response) => response.json())
  .then((json) =>{

console.log(json)
for(let i=0;i<json.length;i++){
  console.log(json[i])
let a1=document.createElement("div");
x.appendChild(a1)










}


  } );


 
  