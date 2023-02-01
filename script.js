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





const images_link=[
  "17133d04c09fd8f8.avif",
  "2cdd45aa5ada2b9c.avif",
  "a19209cb56097338.avif",
  "bd6929145770dc5c.avif",
  "d2736ebfd1992703.avif",
  "eb6363de5bcdfbf4.avif",

 ];
let img1=document.createElement("IMG");
div2.appendChild(img1);
img1.setAttribute("src","https://raw.githubusercontent.com/gitkrishnaa/letme_0.1/main/hotel_img/17133d04c09fd8f8.avif")
img1.setAttribute("width", "100%");
img1.setAttribute("height", "100%");
img1.setAttribute("alt", "The Pulpit Rock");

for(let j=1;j<6;j++){
let div3_img=document.createElement("IMG");
div3.appendChild(div3_img);
div3_img.setAttribute("src",`https://raw.githubusercontent.com/gitkrishnaa/letme_0.1/main/hotel_img/${images_link[j]}`)

div3_img.addEventListener("mouseover",()=>{

img1.setAttribute("src",div3_img.src)

})
}


// title and book and details button
let div4=document.createElement("div");
div1.appendChild(div4);

const div4_title_div=document.createElement('div');
div4.appendChild(div4_title_div);
const div4_title_div_detail=document.createElement("div");

const div4_title1=document.createElement("h3");
div4_title_div_detail.appendChild(div4_title1);
div4_title1.innerText=json[i].title;

const div4_title2=document.createElement("p");
div4_title_div_detail.appendChild(div4_title2);
div4_title2.innerText=json[i].location;


const div4_title_div_price=document.createElement("div");
div4_title_div_price.innerText=json[i].price


div4_title_div.appendChild(div4_title_div_detail);
div4_title_div.appendChild(div4_title_div_price);



const div4_button_div=document.createElement('div');
div4.appendChild(div4_button_div);

const div4_button_div_detail=document.createElement("button");
div4_button_div_detail.innerText="View Details";



const div4_button_div_book=document.createElement("button");
div4_button_div_book.innerText="BOOK"

div4_button_div.appendChild(div4_button_div_detail);
div4_button_div.appendChild(div4_button_div_book);










}


  } );

if(window.location==="https://letroom.in/data.json"){
  window.location="ok";
  alert("it not work")
} 
else{
 
  console.log(window.location.href)
  console.log("not work3")
}
 
  