// local module is created by itself and use it as locally

const { person, personName, number } = require("./arr.js");

// console.log(person);
person.forEach((element, i) => {
  console.log(
    `Name: ${element.name}, Age: ${element.age}, City: ${element.city} at index ${i}`
  );
});

personName.forEach((pName, i) => {
  console.log(` person Name: ${pName} at index ${i}`);
});
number.forEach((num,i)=>{
    console.log(`number: ${num}`);
    
})
