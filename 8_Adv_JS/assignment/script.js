let child_son = document.querySelector('#child-son')
let child = document.querySelector('#child')
let parnet = document.querySelector('#parnet')
let grandParent = document.querySelector('#grandParent')
let ansistors = document.querySelector('#ansistors')


child_son.addEventListener("click", (e) => {
    console.log("child-son clicked")
    e.stopPropagation() // stop recursive trigger 
})


child.addEventListener("click", (e) => {
    console.log("child clicked")
    e.stopPropagation() // stop recursive trigger 
})
parnet.addEventListener("click", (e) => {
    console.log("parnet clicked")
    e.stopPropagation() // stop recursive trigger 
})

grandParent.addEventListener('click', (e) => {
    console.log("grandparent clicked")
    e.stopPropagation() // stop recursive trigger 
})

ansistors.addEventListener('click', (e) => {
    console.log("ansistors clicked ")
    e.stopPropagation() // stop recursive trigger 
})

window.addEventListener('click', (e) => {
    console.log("windown clicked ")
    e.stopPropagation() // stop recursive trigger 
})



//  delegation

let ul_list = document.querySelector('#ul-list')

function counter() {
    let count = 2 // initialize counter
    return function () {
        return count++ //return value
    }
}
let cnt = counter() // create closure for cnt

ul_list.addEventListener('click', (e) => {


    let li = document.createElement("li")
    li.textContent = "link-" + cnt() // use clouser's laxical environment value

    ul_list.appendChild(li).classList.add('red')
    // console.log(cnt)

})

// this keyword

// case 1 


function func() { // normal function 
    console.log(this)
}
func()

let func2 = () => {  //function with arrow (ananymus function)
    console.log(this)
}
func2()


let obj = {
    name: "suraj kumar",
    age: 24,
    task: function () {
        console.log(this) //this keyword is badage which associate with caller
    }    
}    

obj.task()

let obj2 = {
    name: "suraj kumar",
    age: 24,
    task: ()=> {
        console.log(this) //In this virsion this keyword is badage which associate with window
    }    
}    

obj2.task()








