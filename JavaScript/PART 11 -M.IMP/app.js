
//   ------------ Call stack concept -------------
// function hello(){
//     console.log("hello");
// }

// function demo(){
//     hello();
// }
// demo();

// ----------- Visualizing the call stack -----------

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans=two() + one();
    console.log(ans);
}

three();