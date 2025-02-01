let child_son = document.querySelector('#child-son')
let child = document.querySelector('#child')
let parnet = document.querySelector('#parnet')
let grandParent = document.querySelector('#grandParent')
let ansistors = document.querySelector('#ansistors')


child_son.addEventListener("click",(e)=>{
    console.log("child-son clicked")
    e.stopPropagation() // stop recursive trigger 
})


child.addEventListener("click",(e)=>{
    console.log("child clicked")
    e.stopPropagation() // stop recursive trigger 
})
parnet.addEventListener("click",(e)=>{
    console.log("parnet clicked")
    e.stopPropagation() // stop recursive trigger 
})

grandParent.addEventListener('click',(e)=>{
    console.log("grandparent clicked")
    e.stopPropagation() // stop recursive trigger 
})

ansistors.addEventListener('click',(e)=>{
    console.log("ansistors clicked ")
    e.stopPropagation() // stop recursive trigger 
})

window.addEventListener('click',(e)=>{
    console.log("windown clicked ")
    e.stopPropagation() // stop recursive trigger 
})