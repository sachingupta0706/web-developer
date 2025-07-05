
// ----- Simple function example -----------
// function greet(){
//     return "hello";
// }
// console.log(greet());

// ----- async function example ------------

// async function greet(){
//     return "hello";
// }
// console.log(greet());

// -------- promise return rejected in async function ------------


// async function greet(){
//     // abc.abc();           // promise return reject in state
//     throw "some random error";
//     return "hello";
// }
// console.log(greet());

// ------ async with promise ---------
// async function greet(){
//     return "hello"
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err:",err);
// })

// ------------- async in arrow function -----------

// let hello = async ()=>{
//     return "hello"
// }
// console.log(hello());

// ---------- await -------
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }
// console.log(demo());

// ------- JSON -----------
// JSON -- Parse data ----------
// let jsonRes = `{"fact": "Cats must have fat in their diet because they can't produce it on their own.","length": 76}`;
// // console.log(jsonRes);
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

//  JSON --- stringify ------ 

// let student ={
//     name:"sachin",
//     marks : 99
// }
// // console.log(student)
// let a=JSON.stringify(student);
// console.log(a); 

// ------- fetch api -----------
// let url = "https://catfact.ninja/fact";
// // console.log(fetch(url));
// fetch(url);

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
// })
// .catch((err)=>{
//     console.log("ERROR",err);
// });

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("ERROR",err);
// });

// ------- using axios send http request ----------

//  let url = "https://catfact.ninja/fact";

//  async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     }catch(e){
//         console.log("error - ",e);
//     }
//  }
//  console.log(getFacts());
