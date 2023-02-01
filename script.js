console.log('Hello! ');

let x =document.getElementById("main");
console.log(x)
fetch('./data.json')
  .then((response) => response.json())
  .then((json) =>{

console.log(json)
for(let i=0;i<json.length;i++){
  
let div1=document.createElement("div");
x.appendChild(div1);


let div2=document.createElement("div");
div1.appendChild(div2);


let div3=document.createElement("div");
div1.appendChild(div3);

let div4=document.createElement("div");
div1.appendChild(div4);








}


  } );


 
  