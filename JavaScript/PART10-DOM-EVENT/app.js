// DOM EVENT --------

// ------ON CLICK --------

// let btn=document.querySelector("button");

// console.dir(btn);

// btn.onclick=function(){
//     console.log("button was clicked");
//     // alert("button was clicked");
// }

// ------ 2 way of on click ----------

// let btn=document.querySelector("button");

// console.dir(btn);
 
// function sayHello(){
//     alert("Hello");
// }

// btn.onclick=sayHello;

// ------- event listener --------
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);  
}

function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Apna college");
}

