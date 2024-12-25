
//  catagories of function

// function dclearation
function add(){
    console.log("hello")
}

add()

function fullName(fname,lname){
    let name = fname +" "+ lname;
    console.log(name)
}

fullName("amit","kumar")
fullName("suraj","kumar")

// function expression

let sample = function (a){
    console.log(a)
}

sample(10)

let sum = (a,b)=>{
    console.log("sum : "+(a+b))
    return a+b;
}

console.log(sum(10,20))