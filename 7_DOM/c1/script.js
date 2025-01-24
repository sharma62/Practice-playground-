
// Dom : Accessing Elememnts
let h1Tag = document.getElementsByTagName('h1')
// let h1Tag = document.getElementsById('h1')
let heading1 = document.getElementsByClassName('heading-1')
// let pTag = document.querySelectorAll("p")
let pTag = document.querySelector("p")

let val = document.querySelector(".heading-1")
let val2 = document.querySelector("#paragraph")
let val3 = document.querySelector("#Link-2")
// console.log(val3)

// DOM : Travering Elements 
// Select the parent and access the child elememnt

let parent = document.querySelector(".container")
let child = parent.children
// console.log(child)

// select child and access the parent node

let heading = document.querySelector('.heading-1')
let parentOfHeading = heading.parentNode
// console.log(parentOfHeading)


// select one & get it's prev,next siblings 

let paragraph = document.querySelector("#paragraph")
let nextOfParagraph = paragraph.nextElementSibling
let prevOfParagraph = paragraph.previousElementSibling
// console.log(prevOfParagraph)

// change text  & append new text
let heading3 = document.querySelector(".heading-3")
heading3.innerHTML="new heading"
console.log(heading3.outerHTML)
//append 
let heading4 =document.createElement("h4")
heading4.innerText="hello this is heading 4"
let container =document.querySelector(".container")
container.appendChild(heading4)

// console.log(heading4.innerText)

// remove and add class in element

let container1 =document.querySelector('.container')

container1.classList.remove("border-red")
container1.classList.add("border-green")