// Objective: Understand array methods, destructuring, and spread/rest operator in JavaScript.

// Requirements:

// Use map(), filter(), and reduce() methods to manipulate an array.
// Destructure an object into variables.
// Use spread operator to merge two arrays.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map() : it is higher-order function that perform some operation over array and return new array, where as element of original array to be tranformed 
// key point
    // 1. not modify original array
    // 2. every iteration it return new value 
    // 3. return new array 


    // traversing each element  
    array.map((val,idx,arr)=>{
        console.log(val, idx ,arr)
})

// map method use shallow copy 
newArr = array.map((val,idx,arr)=>{
    let DummayArr = [10,20,30,40]
    arr = DummayArr
    console.log(val, idx ,arr)
    return DummayArr
})
console.log(newArr)


// filter() : it is higher-order function that filter an array elemet based on condition and return new array(include all element which satisfied besed oon condition)
// traversing 
// key points
//     1. not modify original array
    // 2. every iteration it return new value 
    // 3. return new array with filter elements

let res = array.filter((currVal)=>{
   return currVal%2===0
})
console.log(res)

// reduce() : it traverse array  and maintain accumulator

let sum = array.reduce((acc,currVal)=>{
     return acc+currVal
})
console.log(sum)


// Destructure an object in to variable

let person = {
    name : "suraj kumar",
    age: 24,
    adds: "bihar"
}

console.log(person)
let {name,age,adds} = person
console.log(name,age,adds)

// use spread operator 

let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,10]

let spreadArr  = [...arr1,...arr2]

console.log(spreadArr)


// use rest operator with clouser

let fun = (...val)=>{
    let res = val.reduce((accumulator,currVal)=>{
        return accumulator+currVal
    })    
    return res  
}

let funClosure =  fun(10,20,30)
console.log(funClosure)
