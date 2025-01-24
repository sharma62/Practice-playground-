//  function take as args now it can call use with in one(){...} function
// function one(x){
//     x()
//     console.log("one")    
// }
//  Higher order function : one()

// one(() => {
//     console.log("ananoymus")
// })


function one() {
    console.log("function called")
    return () => {
        console.log("anonymus function return")
    }
}
//  ye function abhi us function ko return karega jab one() calling ke time uska accepter var ho 

one() // no return
let x = one() // return ( x ka ek clouser bna )
x()

let arr = [10, 20, 30, 40, 50]
console.log("map")
let mapArr=  arr.map((val, idx, arr) => {
    console.log("val:", val, "index:", idx, "arr :", arr)
   return val*val
})
console.log("newarr:",mapArr)
console.log("original:",arr)

console.log("filter")

let filterArr=  arr.filter((val, idx, arr) => {
    console.log("val:", val, "index:", idx, "arr :", arr)
    return val*val
})
console.log("filterArr:",filterArr)
console.log("original:",arr)


let ForEachArr=  arr.forEach((val, idx, arr) => {
    console.log("val:", val, "index:", idx, "arr :", arr)
    return val*val
})
console.log("ForEachArr :",ForEachArr)
console.log("original:",arr)





