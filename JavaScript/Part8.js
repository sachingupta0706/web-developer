// ---------- Array Methods -----------

// --------- forEach -----------

// let arr = [1,2,3,4,5];
// arr.forEach((el)=>{
//     console.log(el);
// });

// ----------- Map ----------

// let a = [1,2,3,4];
// let b = a.map((el)=>{
//     return el*2;
// });
// console.log(b);

// --------- filter ----------

// let nums = [1,2,6,5,9,14,67];
// let ans = nums.filter ((el)=>{
//     return el%2==0;
// });
// console.log(ans);

// ------ Every ----------
// let arr=[2,4,6];

// let newarr = arr.every((el)=>{
//     return el%2==0;
// })
// console.log(newarr);

// let arr=[2,4,6];

// let newarr = arr.every((el)=>{
//     return !(el%2)==0;
// })
// console.log(newarr);

// ------- reduce ----------
// let arr=[1,2,3,4];

// let b = arr.reduce((res,el)=>{
//     return res+el;
// });
// console.log(b);

// ------- Default parameter ------------
// function sum(a,b=2){
//     return a+b;
    
    
// }

// console.log(sum(2));

// ------- spread ---------------

// console.log(..."apnacollege");

// let arr=[5,3,266,5];

//  console.log(Math.min(...arr));

// ------ Spread with array literals -----------

// let arr = [2,5,4,3,4,5];
// let newarr=[...arr];
// console.log(newarr);


// let newarr=[..."apnacollege"];
// console.log(newarr);

// ------ Spread with object literals -------------
//  let data = {
//     name:"sachin",
//     age:21
//  };
//  let datacopy={...data,id:1};
//  console.log(datacopy);
 
// ------ Destructuring -------------------

// let names = ["tony","bruce","peter"];
// let[winner,runnerup]=names;       // Destructuring 
// console.log([winner,runnerup]);

// ---------- Rest Destructuring ----------

// let names=["tony","peter","bruce","akshay","spiderman"];

// let[winner,...others]=names;
// console.log([winner,...others]);

// --------- Destructuring object -------------
// const student = {
//     name:"sachin",
//     age:21,
//     username:"sachin123@12",
//     password:123
// };

// let {username,password}=student;   //Destructuring
// console.log({username});

// const student = {
//     name:"sachin",
//     age:21,
//     username:"sachin123@12",
//     password:123
// };

// let { username:user,password:secret}=student;
// console.log({user,secret})







