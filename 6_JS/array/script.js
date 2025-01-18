let person ={
    name:"suraj",
    age:22,
    occupation:"Teacher"
}

let arr=[1,2,3,4,5,6]

for(let i of arr){
    console.log(i)
}

console.log(person)
person.age=22

for (const key in person) {
    console.log(person[key])
}



