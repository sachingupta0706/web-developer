// -------- FOR LOOP ------------

// for(i=0;i<=10;i++){
//     console.log("Hello",i);
// }

//   -------- Print all odd & even numbers --------

// for(i=1;i<=15;i++){
//     if(i%2==1){
//         console.log("THIS IS ODD NUMBERS:",i);
//     }
//     if(i%2==0){
//         console.log("EVEN NUMBER:",i);
//     }
// }

// ------- Table of 5 ---------

// for(i=5;i<=50;i=i+5)
// {
//     console.log(i);
// } 

// let n = prompt("Write your number");
// n = parseInt(n);

// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }


// ----- NESTED FOR LOOP ------- 

// for(i=1;i<=3;i++){
//     console.log(`Outer loop is ${i}`);
//     for(j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// ---------- While Loop --------------

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// --------- break keyword ------------

// let i=1;
// while(i<=5){
//     if(i==3){
//     // console.log(i);
//     break;
    
// }
//     console.log(i);
//     i++;
// }

// -----------Loops with array ----------

// let fruits = ["apple","banana","litchi","mango","oranges"];

// for(i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

// ------- Nested loops with nested arrays ----------------

// let heroes = [
//     ["batman","superman","thor"],["spiderman","ironman","flash"]
// ]
// // console.log(heroes);
// for(i=0;i<heroes.length;i++){
//     // console.log(`list #${i}`);
//     console.log(i,heroes[i]);
//     for(j=0;j<heroes[i].length;j++){
//         console.log(j,heroes[i][j]);
//     }
// }

// ---------- for of loop ---------------

// let fruits = ["apple","banana","litchi","pineapple","chickoo"]
// for(i of fruits){
//     console.log(i);
// }

// for(char of "apna"){
//     console.log(char);
// }

// ----------- Nested for of loop --------------

// let heroes = [
//     ["batman","flash"],["ironman","spiderman"]
// ]
// for(list of heroes){
//     console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }
