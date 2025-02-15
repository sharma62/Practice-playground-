
let dropdown = document.querySelector('.dropdown')
let menu = document.querySelector('nav .menu')



menu.addEventListener('click',()=>{
    dropdown.classList.toggle('d-none')

    console.log(dropdown)
})
