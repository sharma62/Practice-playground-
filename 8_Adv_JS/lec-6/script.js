// Objective: Understand hoisting, higher order functions, and closures in JavaScript.

// Requirements:

// Explain hoisting with an example.
// Write a higher order function that takes a callback function as an argument.
// Create a closure that returns a function with access to its own scope.


// 1.hoisting : use the variable before it decleard 

// case 1 : here i use variable "val" before it declear
{
    val = 20
    console.log(`val : ${val}`) // val :20
}
console.log(`val : ${val}`)  //val :20

// case 2 : here i declear variable "val" before it use 
let val
{
    val = 20
    console.log(`val : ${val}`) // val :20
}
console.log(`val : ${val}`)  // error because of no initial variable "val"


// 2. higher order function With callback

function child(v){ // higher order function
    console.log("higer order function")
     function callback(){    // callbcak function
         console.log("callback function")
    }

    return callback
}


let master = child(2);

console.log(master())


// 3.create closure that returns a function with access to its own scope
function higerOrderFunction(n){
    let num = n
    return ()=>{
       return  num*=2
    }
}
let number  = 1
let closure = higerOrderFunction(number)

console.log(closure()) // 
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())
console.log(closure())