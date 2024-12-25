// creatig an object 

const person = {
    name: "suraj",
    age: 22,
    greet() {
        console.log(`name : ${this.name} & age : ${this.age}`)
    }
}

// using constructor fuction

function Male(name, age) {
    this.name = name,
        this.age = age
}

Male.prototype.greet = () => {
    console.log(`Hello, My name is  ${this.name} and i am ${age} year is old.  `);
}

const p1 = new Male("ankit", 33)

// console.log(p1)



// Inheritance using Object.prototype
const animal = {
    speak() {
        console.log(`${this.name} makes a sound `)
    }
}

const dog = Object.create(animal)
dog.name = "jone";
dog.speak = function () {
    console.log(`${this.name} barks `)
}

// dog.speak()


// classic inharitance

class Animal {
    constructor(name, bread) {
        this.name = name,
            this.bread = bread
        // this.type= "Animal"
    }
    speak() {
        console.log(`${name} & ${this.bread} makes sounds`)
    }
}

class Vertebrates extends Animal {
    constructor(name, bread) {
        super(name, bread)
        this.type = "Vertebrates"
    }
}

class Invertebrates extends Animal {
    constructor(name, bread) {
        super(name, bread)
        this.type = "Invertebrates"
    }
}

const wb = new Vertebrates("Lion", "cat")

// console.log(wb.name +" "+ wb.bread+" " + wb.type)


// 2.3 Prototypical Inheritance -> using Object.create()

const car = {
    speed() {
        console.log("speed :50 kmph")
    }
}

const sport_car = Object.create(car)

sport_car.speed2 = function () {
    console.log("speed : 200 Kmph")
}
sport_car.speed3 = function () {
    console.log("speed : 1200 Kmph")
}

// sport_car.speed()
// sport_car.speed2()
// sport_car.speed3()


// Prototype Chain = When accessing a property or method, JavaScript searches through the prototype chain until it finds it or reaches the end of the chain.

const A = { role: "dada ji " }
const B = Object.create(A) // B A ke prototype ko inherit kr rakha hai
B.role = "papa ji"
const C = Object.create(B)
C.role = "beta ji"
const D = Object.create(C)

// console.log(D)
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(D)))

// 2.6 Polymorphism
// Polymorphism allows objects or classes to define methods that behave differently depending on the context.

class Bank {
    type() {
        console.log("saving")
    }
}
class Account {
    type() {
        console.log("Account")
    }
}

class Saving extends Account {
    type() {
        console.log("Saving")
    }
}

class Current extends Account {
    type() {
        console.log("Current")
    }
}

let accounts = [new Current(), new Saving, new Saving(), new Current()]
// accounts[0].type()
// accounts[1].type()
// accounts[2].type()
// accounts[3].type()
// accounts.forEach((acc)=>acc.type())

//  Abstraction ->  Abstraction hides complex implementation details and exposes only the necessary features.
class Shape {
    constructor(name) {
        this.name = name
     }
    getArea() {
        throw new Error("No implimentation");

    }
}

class Circle extends Shape {
    constructor(n, radius) {
        super(n)
        this.radius = radius
    }
    getArea(){
        return Math.PI *this.radius*this.radius
    }
}

const product = new Circle("red",20)

p