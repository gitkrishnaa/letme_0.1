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
let img1=document.createElement("IMG");
div2.appendChild(img1);
img1.setAttribute("src","https://raw.githubusercontent.com/gitkrishnaa/letme_0.1/main/hotel_img/17133d04c09fd8f8.avif")
img1.setAttribute("width", "100%");
img1.setAttribute("height", "100%");
img1.setAttribute("alt", "The Pulpit Rock");

for(let j=1;j<6;j++){
let div3_1=document.createElement("div");
div3.appendChild(div3_1);
}
let div4=document.createElement("div");
div1.appendChild(div4);








}


  } );


 
  